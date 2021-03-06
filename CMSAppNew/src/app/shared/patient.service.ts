import { Injectable } from '@angular/core';
import { Patient } from './patient'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  //retrive all data from 
  patients: Patient[];
  formData: Patient = new Patient();

  constructor(private httpClient: HttpClient) { }

  getAllPatient(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/api/patient');
  }

  //geting data
  bindListPatients() {
    this.httpClient.get(environment.apiUrl + '/api/patient')
      .toPromise().then(
        response => {
          this.patients = response as Patient[];
        }
      )
  }
  //get patient  by id
  getPatientById(id: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/api/patient/' + id);
  }
  //insert patient 
  insertPatient(patient: Patient): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/api/patient', patient);
  }
  //update patient by id
  updatePatient(patient: Patient): Observable<any> {
    return this.httpClient.put(environment.apiUrl + '/api/patient', patient);
  }
}
