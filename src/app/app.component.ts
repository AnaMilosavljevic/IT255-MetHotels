import { Component } from '@angular/core';
import { Room } from './room/room.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rooms: Room[];

  constructor() {
    this.rooms = [
      new Room('Double room with garden view', '6001'),
      new Room('Single room with pool view', '8001'),
      new Room('Double room with bunk beds', '5001'),
    ]
  }

  addRoom(description: HTMLInputElement, roomno: HTMLInputElement): boolean {
    console.log(`Adding room description: ${description.value} and link: ${roomno.value}`);
    this.rooms.push(new Room(description.value, roomno.value));
    description.value = '';
    roomno.value = '';
    return false;
  }

}
