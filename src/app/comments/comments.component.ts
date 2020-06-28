import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CommentsReqService } from '../http/comments-req.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments$!: Observable<any[]>;

  constructor(private commentsReqService: CommentsReqService) {}

  ngOnInit(): void {
    this.comments$ = this.commentsReqService.getAllComments(10);
  }

}
