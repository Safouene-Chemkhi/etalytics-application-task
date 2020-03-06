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
  post_comment(post_id, comments){
    return this.http.patch(API_URL+'posts/'+post_id, comments);
  }

  //################  fetch user by id from endpoint #################
  get_user_by_id(user_id){
    return this.http.get(API_URL+'users/'+user_id);
  }

}
