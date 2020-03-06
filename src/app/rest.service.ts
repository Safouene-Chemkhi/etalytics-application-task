import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  //################  Get all post #################
  get_posts(){
    return this.http.get(API_URL+'posts');
  }

  //################  Get all comments for a given post #################
  get_comments(post_ID){
    return this.http.get(API_URL+'comments?postId='+post_ID);
  }  

  //################  Post a comment #################
  post_comment(comment){
    return this.http.post(API_URL+'posts', comment);
  }

}
