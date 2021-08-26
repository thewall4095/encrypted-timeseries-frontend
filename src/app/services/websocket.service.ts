import { Injectable } from '@angular/core';
import { io } from "socket.io-client";
import { environment } from './../../environments/environment';// '../../environments/environment';
import { EMPTY, Subject } from 'rxjs';

@Injectable()
export class WebsocketService {
  socket:any;
  private eventCallback = new Subject<string>(); // Source
  eventCallback$ = this.eventCallback.asObservable(); // Stream
  constructor() {

  }
  setupSocketConnection() {
    this.socket = io(environment.apiUrl, {
      withCredentials: true,
      extraHeaders: {
        "my-custom-header": "test-header"
      }
    });
    this.socket?.on('chart_data', (data: any) => {
      console.log(data);
      let message = JSON.parse(data);
      this.eventCallback.next(message);
      // if(message.roomid == this.roomId){
        // this.messages$.push(JSON.parse(data));
      // }
    });
  }

  disconnect() {
    if (this.socket) {
        this.socket.disconnect();
    }
  }
}
