import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Quiz } from '../class/quiz';
import { QuizService } from '../service/quiz.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public quizzes!: Quiz[];

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.getQuiz();
  }


  public getQuiz(): void {
    this.quizService.getQuiz().subscribe(
      (response:any) => {
        this.quizzes = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
