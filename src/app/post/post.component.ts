import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
}) 
export class PostComponent implements OnInit {
  @Input() post;
  comments: any;
  constructor(private rest: RestService) { 
  
  }

  ngOnInit(): void {
    this.rest.get_comments(this.post.id).subscribe(res => {
      this.comments = res;
    })
  }

}
