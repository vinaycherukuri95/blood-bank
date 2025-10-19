import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DonorService {

  base = 'http://192.168.1.9:8080/api/donors';
  constructor(private http: HttpClient) {}

  list() { return this.http.get<any[]>(this.base); }
  
  create(payload: any) { return this.http.post(this.base, payload); }
}
