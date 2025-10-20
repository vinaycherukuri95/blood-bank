import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Donor } from '../models/donor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonorService {

  base = 'http://192.168.1.7:8080/api/donors';
  constructor(private http: HttpClient) {}

  list(): Observable<Donor[]> {
    return this.http.get<Donor[]>(this.base); // ✅ Return typed JSON array
  }
  
  create(payload: any) { return this.http.post(this.base, payload); }

  updateDonor(id: number, donor: Donor): Observable<string> {
    return this.http.put(`${this.base}/${id}`, donor, { responseType: 'text' });
  }

  deleteDonor(id: number): Observable<string> {
   return this.http.delete(`${this.base}/${id}`, { responseType: 'text' });
  }

  getDonor(id: number): Observable<Donor> {
  return this.http.get<Donor>(`${this.base}/${id}`); // fetch a single donor
 }


}
