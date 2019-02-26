import {Component, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

class ReactParent extends React.Component {
  reactComponent;
  state;

  constructor(props) {
    super(props);
    this.reactComponent = props.reactComponent;
    this.state = props.props;
  }
  render() {
    return React.createElement(this.reactComponent, this.state, null);
  }
}

export function createReactToAngularComponent(reactComponent: any): any {
  @Component({
    selector: reactComponent.selector,
    exportAs: reactComponent.selector,
    template: '<ng-content></ng-content>'
  })

  class ReactWrapperComponent implements OnChanges {
    @Input() props: any = {};
    reactComponent: any;
    element: HTMLElement;
    reactInstance: any;
    constructor(public elementRef: ElementRef) {
      this.element = elementRef.nativeElement;
      this.reactComponent = reactComponent.component;
    }

    ngOnChanges(changes: SimpleChanges) {
      if (changes.props.firstChange) {
        const reactParent = React.createElement(ReactParent, {
          reactComponent: this.reactComponent,
          props: this.props
        }, null);
        const callback = () => {};
        this.reactInstance = ReactDOM.render(reactParent, this.element, callback);
      } else {
        this.props = changes.props.currentValue;
        this.reactInstance.setState(this.props);
      }
    }
  }
  return ReactWrapperComponent;
}
