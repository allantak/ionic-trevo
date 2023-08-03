import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItokenResponse } from '../types/token';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post<ItokenResponse>(`${this.apiUrl}/login`, data);
  }
}
