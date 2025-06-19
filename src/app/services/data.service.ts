import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Get all incidents
  getIncidents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/incidents`);
  }

  // Get specific incident
  getIncident(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/incidents/${id}`);
  }

  // Create new incident
  createIncident(incident: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/incidents`, incident);
  }

  // Update incident
  updateIncident(id: number, incident: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/incidents/${id}`, incident);
  }

  // Delete incident
  deleteIncident(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/incidents/${id}`);
  }

  // Similar methods can be added for other entities in your database
}
