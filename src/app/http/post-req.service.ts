import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PostReqService {
  constructor(private data: DataService) {}

  getAllPosts(limit: number): Observable<any[]> {
    return this.data
      .getAll<any[]>(`posts`)
      .pipe(map(ret => ret.slice(0, limit)));
  }
}
