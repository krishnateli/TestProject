import { Injectable } from '@angular/core';
import { UserConfig } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public currentUser: UserConfig = {
    name: 'Rohan M.',
    image: 'http://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square-300x300.jpg',
    company: 'Pinnacle Company'
  }

}
