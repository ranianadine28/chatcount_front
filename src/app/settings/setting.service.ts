import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
    private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllLabels() {
    return this.http.get<any[]>(`${this.apiUrl}/label/getALLlabel`);
  }
  getAllLabelsbyRE(rootId: string, label: string) {
    return this.http.get<any[]>(`${this.apiUrl}/label/searchAllLabels/${rootId}/${label}`);
  }
  getAllLabelsbyRE2(rootId: string, label: string) {
    return this.http.get<any[]>(`${this.apiUrl}/label/getAllLabels2/${rootId}/${label}`);
  }
  getAllLabelsbyRE3(rootId: string, label: string) {
    return this.http.get<any[]>(`${this.apiUrl}/label/getAllLabels3/${rootId}/${label}`);
  }
  getAllLabelsbyRE4(rootId: string, label: string) {
    return this.http.get<any[]>(`${this.apiUrl}/label/getAllLabels4/${rootId}/${label}`);
  }
  getAllLabelsbyRE5(rootId: string, label: string) {
    return this.http.get<any[]>(`${this.apiUrl}/label/getAllLabels5/${rootId}/${label}`);
  }
  
  getAllLabels2() {
    return this.http.get<any[]>(`${this.apiUrl}/label/getALLlabel2`);
  }
  getAllLabels3() {
    return this.http.get<any[]>(`${this.apiUrl}/label/getALLlabel3`);
  }
  getAllLabels4() {
    return this.http.get<any[]>(`${this.apiUrl}/label/getALLlabel4`);
  }
  getAllLabels5() {
    return this.http.get<any[]>(`${this.apiUrl}/label/getALLlabel5`);
  }
  addNewLabel(newLabelData: any) {
    return this.http.post<any>(`${this.apiUrl}/label/addLabel`, newLabelData);
  }
  addNewLabel2(newLabelData: any) {
    return this.http.post<any>(`${this.apiUrl}/label/addLabel2`, newLabelData);
  }
  addNewLabel3(newLabelData: any) {
    return this.http.post<any>(`${this.apiUrl}/label/addLabel3`, newLabelData);
  }
  addNewLabel4(newLabelData: any) {
    return this.http.post<any>(`${this.apiUrl}/label/addLabel4`, newLabelData);
  }
  addNewLabel5(newLabelData: any) {
    return this.http.post<any>(`${this.apiUrl}/label/addLabel5`, newLabelData);
  }
  updateLabel(labelId: string, updatedLabelData: any) {
    return this.http.patch<any>(`${this.apiUrl}/label/updateLabel/${labelId}`, updatedLabelData);
  }
  updateLabel2(labelId: string, updatedLabelData: any) {
    return this.http.patch<any>(`${this.apiUrl}/label/updateLabel2/${labelId}`, updatedLabelData);
  }
  updateLabel3(labelId: string, updatedLabelData: any) {
    return this.http.patch<any>(`${this.apiUrl}/label/updateLabel3/${labelId}`, updatedLabelData);
  }
  updateLabel4(labelId: string, updatedLabelData: any) {
    return this.http.patch<any>(`${this.apiUrl}/label/updateLabel4/${labelId}`, updatedLabelData);
  }
  updateLabel5(labelId: string, updatedLabelData: any) {
    return this.http.patch<any>(`${this.apiUrl}/label/updateLabel5/${labelId}`, updatedLabelData);
  }
  deletelabel(folderId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/label/deleteLabel/${folderId}`);
  }
  deletelabel2(folderId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/label/deleteLabel2/${folderId}`);
  }
  deletelabel3(folderId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/label/deleteLabel3/${folderId}`);
  }
  deletelabel4(folderId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/label/deleteLabel4/${folderId}`);
  }
  deletelabel5(folderId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/label/deleteLabel5/${folderId}`);
  }
  getCsvData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/mots/getCsvData`)
      .pipe(
        catchError(this.handleError) 
      );
  }
  getPatternsData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/patterns/getpatterns`)
      .pipe(
        catchError(this.handleError) 
      );
  }
  insertCsvData(newRow: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/mots/insertCsv`, newRow)
      .pipe(
        catchError(this.handleError)
      );
  }
  insertPatternData(newRow: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/patterns/insertligne`, newRow)
      .pipe(
        catchError(this.handleError)
      );
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  deleteCsvData(rowIndex: number, columnIndex: number): Observable<any> {
    const options = {
      body: { rowIndex, columnIndex } 
    };
    return this.http.delete<any>(`${this.apiUrl}/mots/deleteCsv`, options);
  }
  deletePatternData(rowIndex: number, columnIndex: number): Observable<any> {
    const options = {
      body: { rowIndex, columnIndex } 
    };
    return this.http.delete<any>(`${this.apiUrl}/patterns/deletePattern`, options);
  }
  
  updateCsvData(rowIndex: number, columnIndex: number, newValue: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/mots/updateCsv`, { rowIndex, columnIndex, newValue });
  }
  updatePatternData(rowIndex: number, columnIndex: number, newValue: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/patterns/updatePattern`, { rowIndex, columnIndex, newValue });
  }
  addColumn(newColumn: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/mots/addColumn`, { newColumn });
  }
  updateCsvDataColonne(newColumn: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/updateCsvDataColonne`, { newColumn });
  }
}
