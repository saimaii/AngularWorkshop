import { Component, OnInit } from '@angular/core';
import {NewsService} from '../services/news.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articleList;
  constructor(private newApi:NewsService) { }

  ngOnInit() {
    this.newApi.getArticle().then(res =>{
      console.log(res);
      this.articleList = res;

    }
      )
  }

}
