import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    authenticated = false;
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public getUsers() {
        return this.http.get(`${this.apiServerUrl}/users`);
    }
}