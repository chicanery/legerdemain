import { Component, OnInit, OnDestroy } from '@angular/core';

import { MessageBusService } from '../../thaumaturgy/message-bus.service';

@Component({
  selector: 'app-test-b',
  templateUrl: './test-b.component.html',
  styleUrls: ['./test-b.component.scss']
})
export class TestBComponent implements OnInit, OnDestroy {
  private subscription;

  constructor(private messageBusService: MessageBusService) { }

  ngOnInit() {
    this.subscription = this.messageBusService.subscribe(this.onMessage);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onMessage(message) {
    console.log('Received from B:');
    console.log(message);
  }
}
