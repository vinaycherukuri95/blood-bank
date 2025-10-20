import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
   base = 'http://192.168.1.7:8080/api/appointments';
  constructor(private http: HttpClient) {}

  listMine() { return this.http.get<any[]>(`${this.base}/me`); }

  book(payload: any) { return this.http.post(this.base, payload); }
  
}
