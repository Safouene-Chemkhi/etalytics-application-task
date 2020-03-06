import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { API_URL } from 'src/environments/environment';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
}) 
export class PostComponent implements OnInit {
  @Input() post;
  comments: any;
  constructor(private rest: RestService, private _snackBar: MatSnackBar, private clipboard: Clipboard) { 
  
  }

  ngOnInit(): void {
    // Get comments from the endpoint
    this.rest.get_comments(this.post.id).subscribe(res => {
      this.comments = res;
    });

    this.rest
  }

  // Function to post a new comment
  post_comment(comment){
    console.log("submet comment");
    
    this.comments.push({
      name:"default user",
      email:"default.user@email.com",
      body:comment.value
    })
    this.rest.post_comment(this.post.id, this.comments);
  }

  // function to show the post's URL
  openSnackBar(){
    this._snackBar.open(API_URL+'posts/'+this.post.id, 'copy', {
      duration: 4000,
    });
    this.clipboard.copy(API_URL+'posts/'+this.post.id);
    
  }

  // Get the user who have published the post
  get_user(){
    let user: any;
    this.rest.get_user_by_id(this.post.userId).subscribe(res =>{
      user = res;
    })
    return user;
  }



}
