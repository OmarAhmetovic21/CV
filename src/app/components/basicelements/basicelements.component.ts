import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-basicelements',
  templateUrl: './basicelements.component.html',
  styleUrls: ['./basicelements.component.scss']
})
export class BasicelementsComponent implements OnInit {
    simpleSlider = 40;
    doubleSlider = [20, 60];
    state_default: boolean = true;
    focus: any;
    isDesktopDevice: any;
    constructor(
      private deviceService: DeviceDetectorService
    ) { }

    ngOnInit() {
      this.isDesktopDevice = this.deviceService.isDesktop();
    }

}
