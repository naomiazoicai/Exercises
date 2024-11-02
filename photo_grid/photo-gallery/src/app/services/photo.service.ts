import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

interface Photo {
  id: number;
  author: string;
  download_url: string;
}

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private apiUrl = 'https://picsum.photos/v2/list';

  constructor(private http: HttpClient) {
  }

  getPhotos(page: number, limit: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.apiUrl}?page=${page}&limit=${limit}`);
  }
}
