import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PostsReqService } from '../http/posts-req.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$!: Observable<any[]>;

  constructor(private postsReqService: PostsReqService) {}

  ngOnInit(): void {
    this.posts$ = this.postsReqService.getAllPosts(10);
  }
}
