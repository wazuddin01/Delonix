import { Component, OnInit } from '@angular/core';
import { PostService } from './service/post.service';
import { Post } from './model/Post';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Posts: any[];
  count = 100;

  constructor(private postService: PostService) { }
  ngOnInit() {
    this.postService.getPost()
      .subscribe(data => {
        this.Posts = data
        console.log(this.Posts)
      }, err => {
        console.log(err)
      })
  }
  createPost(form) {
    let post = form.value
    this.postService.createPost(post)
      .subscribe(success => {
        success['userId'] = this.count + 1;
        this.Posts.splice(0, 0, success)
        console.log(success)
      })
  }

  deletePost(post) {
    this.postService.deletePost(post.id)
      .subscribe(() => {
        let index = this.Posts.indexOf(post)
        this.Posts.splice(index, 1)
      }, err => {
        console.log(err)
      })
  }

}
