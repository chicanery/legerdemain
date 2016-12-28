import { Injectable, EventEmitter } from '@angular/core';

let emitter = new EventEmitter();

@Injectable()
export class MessageBusService {
  
  subscribe(generatorOrNext?, error?, complete?) {
    return emitter.subscribe(generatorOrNext, error, complete);
  }

  emit(value) {
    emitter.emit(value);
  }
}
