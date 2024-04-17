import { Injectable } from '@angular/core';
import { Observable, timestamp } from 'rxjs';
import io from 'socket.io-client';
import { Message } from '../dashboard/message-model';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';

  
@Injectable()
export class knowledgeService {
    private socket: any;
    private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
    this.socket = io(environment.apiUrl);

  }
  createFolder(name: string, userId: string | undefined): Observable<any> {
    return this.http.post<any>(this.apiUrl, { name, userId });
  }

  // Récupérer tous les dossiers d'un utilisateur
  getFolders(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/dossier/${userId}`);
  }

  getFolderById(folderId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/dossier/folder/${folderId}`);
  }

  updateFolder(folderId: string, name: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/dossier/${folderId}`, { name });
  }

  // Supprimer un dossier
  deleteFolder(folderId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/dossier/${folderId}`);
  }
}
