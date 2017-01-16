import { Component } from '@angular/core';

@Component({
    selector: 'content',
    template: `<ng-content></ng-content>`,
    styles: [
      `
      :host {
        width: 100vw;
      }
      `
    ]
})
export class ContentComponent {}