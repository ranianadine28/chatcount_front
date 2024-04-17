import { Component, OnInit } from '@angular/core';
import { knowledgeService } from './knowledge.service';
import { Message } from '../dashboard/message-model';

interface ChatListResponse {
  userId: string;
}


@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.css'
})
export class KnowledgeComponent implements OnInit {
  value: string = ''; 

  constructor(private chatService: knowledgeService) {}

  ngOnInit() {
   
  }
  
}