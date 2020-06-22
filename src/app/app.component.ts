import { Component, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-component-template';
  isShow = true;

  countdownSecond = 5;

  showMessage() {
    alert('hết giờ rồi!!!');
  }

  toggle() {
    this.isShow = !this.isShow;
  }

  changeCountdownSecond(){
    this.countdownSecond = 20;
  }

  ngOnChanges(changes: SimpleChange): void{
    console.log('Appcomponent, ngOnChanges được gọi là : ', changes)
  }
}
