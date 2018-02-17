import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(private flashlight: Flashlight) {

  }

  onFlashLight(){
    this.flashlight.switchOn();
  }

  offFlashLight(){
    this.flashlight.switchOff();
  }
}
