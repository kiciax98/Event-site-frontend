import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class QuizService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public getQuiz() {
        return this.http.get(`${this.apiServerUrl}/quiz`);
    }

    public getQuizById(id: number) {
        return this.http.get(`${this.apiServerUrl}/quiz/${id}`);
    }
}