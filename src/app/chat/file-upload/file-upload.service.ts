import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environment/environment';
import { Observable, catchError, throwError } from 'rxjs';
interface UploadResponse {
  status: number; // Add status property
  message?: string; // Optional message property
  data?: any; 
  fecId?: string;// Optional data property
}
@Injectable({
  providedIn: 'root'
})
export class FecService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}
  getFecs(userId: string | null): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/fec/getCsv/${userId}`);
  }
  
  uploadFile(file: File, userId: string | null): Observable<UploadResponse> {
    const formData = new FormData();
    formData.append('csvFile', file);
  
    const headers = new HttpHeaders(); 
    headers.set('Content-Type', 'multipart/form-data'); 
  
    const options = {
      headers: headers
    };
  
    return this.http.post<UploadResponse>(`${this.apiUrl}/fec/uploadCsv/${userId}`, formData, options)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          // Gérer l'erreur HTTP ici
          return throwError(error); // Renvoie l'erreur au composant pour une gestion ultérieure
        })
      );
  }

  replaceFile(existingFecId: string, file: File): Observable<UploadResponse> {
    const formData = new FormData();
    formData.append('csvFile', file);
  
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'multipart/form-data');
  
    return this.http.put<UploadResponse>(`${this.apiUrl}/fec/replace/${existingFecId}`, formData, { headers })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          // Gérer l'erreur HTTP ici
          return throwError(error); // Renvoie l'erreur au composant pour une gestion ultérieure
        })
      );
  }
  
  
  ajoutConversation(userId: string, fecId: string, conversationName: string): Observable<any> {
    const body = { conversationName }; 
    return this.http.post<any>(`${this.apiUrl}/conversation/conversations/${userId}/${fecId}`, body)
  }
  deleteFec(fecId: string): Observable<UploadResponse> {
    return this.http.delete<UploadResponse>(`${this.apiUrl}/fec/deletefec/${fecId}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error); 
        })
      );
  }
  
  
}