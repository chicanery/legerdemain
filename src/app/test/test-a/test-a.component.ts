import { Component, OnInit, OnDestroy } from '@angular/core';

import { MessageBusService } from '../../thaumaturgy/message-bus.service';

@Component({
  selector: 'app-test-a',
  templateUrl: './test-a.component.html',
  styleUrls: ['./test-a.component.scss']
})
export class TestAComponent implements OnInit, OnDestroy {
  private subscription;
  private count = 0;

  constructor(private messageBusService: MessageBusService) { }

  ngOnInit() {
    this.subscription = this.messageBusService.subscribe(this.onMessage);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onMessage(message) {
    console.log('Received from A:');
    console.log(message);
  }

  onClick() {
    this.messageBusService.emit({ content: 'hello ' + this.count++ });
  }
}
