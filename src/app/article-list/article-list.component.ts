import { Component, OnInit } from '@angular/core';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles = [
    {
      title: 'Chiều nay, trục vớt quả bom cách cầu Long Biên khoảng 800m',
      content: 'Lực lượng chức năng sẽ trục vớt quả bom cách cầu Long Biên (Hà Nội) khoảng 800m vào chiều nay.',
      image: 'https://cdn.24h.com.vn/upload/2-2020/images/2020-06-22/120x90/1592812311-862-thumbnail-width640height480.jpg'
    },
    {
      title: 'Cực nóng BXH Ngoại hạng Anh: Thắng Aston Villa, Chelsea hơn MU mấy điểm?',
      content: 'Sau vòng 30, cục diện cuộc đua tốp 4 tại Ngoại hạng Anh có diễn biến như thế nào?',
      image: 'https://cdn.24h.com.vn/upload/2-2020/images/2020-06-22/120x90/14-640-1592784876-289-width640height480.jpg'
    },
    {
      title: 'Sự cố "ngã ngửa" khi tập gym: Nổ vòng 3, hot girl gặp phiền hà vì body hoàn hảo',
      content: 'Nhiều người đẹp mê thể thao đã rơi vào tình huống "tập cũng không yên".',
      image: 'https://cdn.24h.com.vn/upload/2-2020/images/2020-06-22/120x90/1592809017-664-thumbnail-width640height480.jpg'
    },
    {
      title: '"Váy em trong quá nhìn xuyên qua" gây thị phi trên truyền hình, tại sự kiện',
      content: 'Với loại váy mỏng manh này, nhiều người đẹp bị chỉ trích là khoe thân quá đà.',
      image: 'https://cdn.24h.com.vn/upload/2-2020/images/2020-06-22/120x90/1592809688-332-thumbnail-width640height480.jpg'
    }
  ];

  filterArticles = [];
  
  updateArticle() { }
  
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.filterArticles =  this.articles;

    this.searchService.searchInput.subscribe(keywords =>{
      this.filterArticles = this.articles
        .filter( item => item.title.toLowerCase().includes(keywords.toLowerCase()) );
    });
  }
}
