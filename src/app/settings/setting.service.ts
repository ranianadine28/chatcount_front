import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
    private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllLabels() {
    return this.http.get<any[]>(`${this.apiUrl}/label/getALLlabel`);
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
    return this.http.put<any>(`${this.apiUrl}/label/updateLabel/${labelId}`, updatedLabelData);
  }

}
