import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITokenResponse } from '../types/token';
import { ICall } from '../types/call';
import * as jsonData from '../../assets/list.call.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8081';
  private mockApiUrl = 'https://64d0efa7ff953154bb79be0d.mockapi.io/call'


  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post<ITokenResponse>(`${this.apiUrl}/login`, data);
  }

  listCall() {
    return this.http.get<Array<ICall>>(this.mockApiUrl);
  }

  add(data: any) {
    return this.http.post(this.mockApiUrl, data);
  }


  getId(id: any) {
    return this.http.get(this.mockApiUrl + `/${id}`);
  }

  update(id: number ,call: ICall) {
    return this.http.put(this.mockApiUrl + `/${id}`, call);
  }

  delete(id: any) {
    return this.http.delete(this.mockApiUrl + `/${id}`);
  }
}
