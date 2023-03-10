import { Injectable } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';
import { SignupRequestPayload } from '../signup/singup-request.payload';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  signup(signupRequestPayload: SignupRequestPayload): Observable<any>{
    return this.httpClient.post('http://localhost:8080/api/auth/signup', signupRequestPayload, { responseType: 'json' });
  }
}
