import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ChatService, Message } from './chatbot.service';
import { FecService } from './file-upload/file-upload.service';
import { ViewChild, ElementRef } from '@angular/core'; // Import for ViewChild
import { AuthService } from '../authetification/auth.service';
import { environment } from '../environment/environment';
import { User } from '../authetification/login/model_user';
import { isPlatformBrowser } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewchatComponent } from '../chat-div/modal/newchat/newchat.component';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations'; // Importation des animations

@Component({
  selector: 'app-chatbot',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  animations: [
    trigger('messageAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('300ms', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ChatComponent implements OnInit {
  showContent = true;
  imgPrefix = environment.apiUrl + '/avatars/';
  messages: Message[] = [];
  value = '';
  public noConversationId: boolean = false;
  recording = false; 
  public conversationExists: boolean = false;
  fecName :string | undefined;
  currentUser: User | null = null;
  conversationSubscription: Subscription | undefined;
  conversationId!: string;
  selectBConvContent:string = '';
  @ViewChild('audioRecorder', {static: false}) audioRecorder!: ElementRef<HTMLAudioElement>; 

  constructor(
    public chatService: ChatService,
    private modal: NgbModal,
    public fecService: FecService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.authService.retrieveCurrentUserFromLocalStorage();
      this.authService.currentUser$.subscribe(user => {
        this.currentUser = user;
      });
    } else {
    }
  
    this.route.paramMap.subscribe(params => {
      this.conversationId = params.get('id') || '';
      this.chatService.initSocketListeners(this.conversationId);

     
    if (this.conversationId) {
      this.conversationExists = true; 
      this.loadConversationMessages(this.conversationId);
      this.chatService.getFecName(this.conversationId).subscribe(
        fecName => {
          console.log("Nom du FEC reçu :", fecName);
          this.fecName = fecName; // Mettez à jour la propriété fecName
        },
        error => {
          console.error("Erreur lors de la récupération du nom du FEC :", error);
        }
      );
    } else {
      this.conversationExists = false; 
    }
     
    });
  
    this.chatService.conversation.subscribe((messages: Message[]) => {
      this.messages = [...this.messages, ...messages];
    });
  
    this.conversationSubscription = this.chatService.conversation.subscribe(
      (messages) => (this.messages = messages)
    );
  
    
  }
  
  bots: any[] = []; 
  ngOnDestroy() {
    this.conversationSubscription!.unsubscribe();
  }
  addChat() {
    this.showContent = false;

    const modalRef = this.modal.open(NewchatComponent, {
      size: 'md',
      windowClass: 'modal modal-primary'
    });
    modalRef.componentInstance.modalMode = 'add';

    modalRef.result.then((x) => {
      if (x) {
      this.messages = [];
      this.showContent = false;
      }
    }, () => {});
  }

  sendMessage() {
    if (this.value.trim() !== '') {
      this.chatService.getBotAnswer(this.value, this.conversationId);
      
      console.log("currentUser",this.currentUser);
      console.log(this.value);
      this.value = '';
    }
  }
  loadConversationMessages(conversationId: string): void {
    this.messages = []; 
    this.chatService.getConversationMessages(conversationId).subscribe(
      messages => {
        this.messages = messages; 
      },
      error => {
      
      }
    );
  


  }
  
  startRecording() {
    if (!this.recording) {
      this.recording = true;
      navigator.mediaDevices.getUserMedia({ audio: true }) 
        .then(stream => {
          const mediaRecorder = new MediaRecorder(stream); 
          const chunks: BlobPart[] = []; 

          mediaRecorder.ondataavailable = (event) => {
            chunks.push(event.data); 
          };

          mediaRecorder.onstop = () => {
            this.recording = false;
            const audioBlob = new Blob(chunks, { type: 'audio/wav' }); 
            const audioUrl = URL.createObjectURL(audioBlob);

            if (this.audioRecorder) {
              this.audioRecorder.nativeElement.src = audioUrl; 
              this.audioRecorder.nativeElement.controls = true;
            }
          };

          mediaRecorder.start();
          
          setTimeout(() => {
            mediaRecorder.stop(); 
          }, 5000);
        })
        .catch(error => {
          console.error('Error accessing microphone:', error);
        });
    }
  }

  
}
