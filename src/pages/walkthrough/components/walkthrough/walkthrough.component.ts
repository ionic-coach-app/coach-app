import { Component, OnInit, Injector } from '@angular/core';
import { Extender } from '../../../../shared/helpers/extender';

@Component({
  selector: 'app-walkthrough',
  templateUrl: './walkthrough.component.html',
  styleUrls: ['./walkthrough.component.scss'],
})
export class WalkthroughComponent extends Extender implements OnInit {

  constructor(protected injector: Injector) {
    super(injector);
  }

  ngOnInit() {}

}
