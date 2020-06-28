import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ENV_CONFIG, EnvironmentConfig } from './environment-config.interface';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public apiUrl: string;

  constructor(
    @Inject(ENV_CONFIG) private readonly config: EnvironmentConfig,
    private http: HttpClient
  ) {
    this.apiUrl = `${config.environment.baseUrl}`;
  }

  getAll<T>(path: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${path}`);
  }
}
