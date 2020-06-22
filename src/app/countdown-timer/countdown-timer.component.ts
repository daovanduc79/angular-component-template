import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {

  @Output() timeout = new EventEmitter;

  private mySeconds: number;

  @Input()
  get seconds() {
    return this.mySeconds;
  }
  set seconds(value: number) {
    const myNumber = Number(value);

    if (isNaN(myNumber)) {
      this.mySeconds = 20;
    } else {
      this.mySeconds = myNumber;
    }
  }

  countdownInterval: any;

  constructor() {
    console.log('Khởi tạo đối tượng CountdownTimerComponent');
    console.log('this.mySeconds = ', this.mySeconds);
  }

  ngOnInit() {
    console.log('Phương thức ngOnInit() được gọi.');
    console.log('this.mySeconds = ', this.mySeconds);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges được gọi: ', changes);
  }

  ngOnDestroy() {
    console.log('Phương thức ngOnDestroy() được gọi.');
  }

  startCountdown() {
    this.countdownInterval = setInterval(() => {

      if (this.mySeconds > 0) {
        this.mySeconds--;
      } else {
        this.showMessage();
        this.stopCountdown();
      }
    }, 1000);
  }

  stopCountdown()
  {
    clearInterval(this.countdownInterval);
  }

  showMessage() {
      alert('hết giờ');
  }

}
