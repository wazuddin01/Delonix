import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/Post';
import { Observable } from 'rxjs';

@Injectable()
export class PostService {
  posts: Post[]
  url = "https://jsonplaceholder.typicode.com/posts"

  constructor(private http: HttpClient) { }

  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url)
  }
  createPost(post) {
    return this.http.post(this.url, post)
  }
  deletePost(id) {
    return this.http.delete(`${this.url}/${id}`)
  }
}
