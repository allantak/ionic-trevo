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


  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post<ITokenResponse>(`${this.apiUrl}/login`, data);
  }

  listCall(){
   return  this.http.get<Array<ICall>>('assets/list.call.json');
  }

  add(data: any){
    return  this.http.put('assets/list.call.json', data);
   }
}
