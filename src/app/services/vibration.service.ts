import { Injectable } from '@angular/core';
import { Vibration } from '@ionic-native/vibration/ngx';

@Injectable({
  providedIn: 'root'
})
export class VibrationService {

  constructor(private vibration: Vibration) { }
  public vibrate(){
    this.vibration.vibrate(200);
  }
}
