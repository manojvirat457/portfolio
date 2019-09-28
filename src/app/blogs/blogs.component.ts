import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Posts } from '../interfaces/posts';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  posts;
  postDetails: Posts[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getPost().subscribe((data) => {
      this.posts = data['items'];
      console.log(this.posts);
      if (this.posts != null) {
        this.posts.forEach(element => {
          this.postDetails.push(
            new Posts(element['title'], element['pubDate'], element['link'], element['thumbnail'])
          );
        });
        console.log(this.postDetails);
      }
    });
  }

}
