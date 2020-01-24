import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    Url: string;
    token: string;
    header: any;
    constructor(private http: HttpClient) {}

}  