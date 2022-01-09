import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from '../class/quiz';
import { QuizService } from '../service/quiz.service';

@Component({
  selector: 'app-detailed-card',
  templateUrl: './detailed-card.component.html',
  styleUrls: ['./detailed-card.component.scss']
})
export class DetailedCardComponent implements OnInit {
  public id!: number;
  public quiz!: Quiz;

  constructor(private quizService: QuizService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.getQuizById(this.id);
  }

  public getQuizById(id: number): void {
    this.quizService.getQuizById(this.id).subscribe(
      (response:any) => {
        this.quiz = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
