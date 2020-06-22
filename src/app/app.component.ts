import { Component, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-component-template';
  articles = [
    {
      title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
      url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
    },
    {
      title: 'Game of Life',
      url: 'https://thefullsnack.com/posts/game-of-life.html'
    },
    {
      title: 'Nguyên tắc thiết kế REST API',
      url: 'https://medium.com/eway/nguyên-tắc-thiết-kế-rest-api-23add16968d7'
    },
    {
      title: 'Why You Only Need to Test with 5 Users',
      url: 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/'
    },
    {
      title: 'Let’s Build A Web Server. Part 1.',
      url: 'https://ruslanspivak.com/lsbaws-part1/'
    }
  ];

  article = {
    title: '' ,
    url: ''
  }

  updateArticle() {
    // art.title = document.getElementById('article-title').nodeValue;
    // art.url = document.getElementById('article-url').nodeValue;
  }

  addArticle() {
    let articleNew = {
      title: this.article.title,
      url: this.article.url
    }
    this.articles.push(articleNew);
    this.article = {
      title: '',
      url: ''
    }
  }



  isShow = false;
  isShow2 = false;

  // countdownSecond = 5;

  // showMessage() {
  //   alert('hết giờ rồi!!!');
  // }

  toggle() {
    this.isShow = !this.isShow;
  }
  toggle2() {
    this.isShow2 = !this.isShow2;
  }

  // changeCountdownSecond(){
  //   this.countdownSecond = 20;
  // }

  // ngOnChanges(changes: SimpleChange): void{
  //   console.log('Appcomponent, ngOnChanges được gọi là : ', changes)
  // }
}
