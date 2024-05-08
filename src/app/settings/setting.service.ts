import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';

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

}
