/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MessageBusService } from './message-bus.service';

describe('MessageBusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageBusService]
    });
  });

  it('should ...', inject([MessageBusService], (service: MessageBusService) => {
    expect(service).toBeTruthy();
  }));
});
