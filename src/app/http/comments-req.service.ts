import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsReqService {
  constructor(private data: DataService) { }

  getAllComments(limit: number): Observable<any[]> {
    return this.data
      .getAll<any[]>('comments')
      .pipe(map(ret => ret.slice(0, limit)));
  }
}
