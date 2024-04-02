import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable, Subject, catchError, throwError } from 'rxjs';
import io from 'socket.io-client';
import { environment } from '../environment/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AlertHandlerService } from '../SharedModule/alert_handler.service';
import { Conversation } from '../chat-div/conersation-model';
import { User } from '../authetification/login/model_user';
import { AuthService } from '../authetification/auth.service';
import { map } from 'rxjs/operators'; // Importez les opérateurs map et catchError

export class Message {
  constructor(public sender: string | undefined, public text: string) {}
}

@Injectable()
export class ChatService {
  private socket: any;
  conversation = new Subject<Message[]>();
  private fecName: string | undefined;

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private authService: AuthService, @Inject(PLATFORM_ID) private platformId: Object) {
    this.socket = io(environment.apiUrl);
      this.socket.on('connect_error', (error: any) => {
        console.error('Error connecting to socket:', error);
      });
  
      this.socket.on('error', (error: any) => {
        console.error('Error sending message:', error);
      });
  }

  getBotAnswer(msg: string, conversationId: string) {
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);
    this.socket.emit('message', { text: msg, conversationId }); // Envoyer le message de l'utilisateur au backend
  }
  getFecName(conversationId: string): Observable<string> {
    return this.http.get<{ fecName: string }>(`${this.apiUrl}/fec/getFecName/${conversationId}`).pipe(
      map(response => response.fecName),
      catchError(error => {
        console.error("Erreur lors de la récupération du nom du FEC :", error);
        return throwError("Erreur lors de la récupération du nom du FEC");
      })
    );
  }
  
 
  initSocketListeners(conversationId: string) {
    // Écouter l'événement 'fetchFecName' pour récupérer le nom FEC
    this.socket.emit('fetchFecName', conversationId);

    this.socket.on('message', (data: any) => {
      const botMessage = new Message('bot', data);
      this.conversation.next([botMessage]);
      // this.saveMessageToDatabase('bot', data, conversationId);
      console.log("id", conversationId);
      console.log(data);
    });

    // Écouter la réponse pour le nom FEC
    this.socket.on('fecName', (fecName: string) => {
      this.fecName = fecName;
      console.log('FEC name:', fecName);
    });
  }
  
  saveMessageToDatabase(sender: string, text: string, conversationId: string): void {
    if (conversationId && conversationId.trim() !== '') {
      this.saveConversation([{ sender, text }], conversationId)
        .subscribe(
          (response) => {
            console.log("Message enregistré avec succès :", response);
          },
          (error) => {
            console.error("Erreur lors de l'enregistrement du message :", error);
          }
        );
    } else {
      console.error("ConversationId invalide :", conversationId);
    }
  }
  
  saveConversation(messages: Message[], conversationId: string): Observable<any> {
    const requestBody = { messages }; // Utilisez directement les messages fournis en tant que corps de la requête
  
    return this.http.post<any>(`${this.apiUrl}/conversation/enregistrer-message/${conversationId}`, requestBody)
      .pipe(
        catchError(this.handleError) // Gérer les erreurs
      );
  }
  
  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
    } else {
      const errorMessage = `Backend returned code ${error.status}, body was: ${error.error}`;
      return throwError(errorMessage);
    }
    return throwError('Something bad happened; please try again later.');
  }

  getConversations(userId : string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/conversation/conversations/${userId}`);
  }
  getConversationMessages(conversationId : string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/conversation/conversationsMessage/${conversationId}`);
  }
  deleteConversation(conversationId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/conversation/deleteconversation/${conversationId}`);
  }
  renameConversation(conversationId: string, newName: string): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/conversation/renameConversation/${conversationId}`, { name: newName });
  }
}
