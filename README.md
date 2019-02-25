ReactToAngular
==============
ReactToAngular is a simple wrapper that you can place around any React component, to be used inside any Angular application.

## Installation

```bash
npm install
```

## Demo

```bash
npm run start
```

# Usage

```javascript
// Manage all your imported React components by mapping them to a selector.
import { SomeReactComponent } from './SomeReactComponent.js';

export const ReactComponents: Array<any> = [
  {
    selector: 'reactComponentSelector',
    component: SomeReactComponent
  }
];
```

```javascript
// Declare your imported React components in the module
import {ReactComponents} from './react-to-export';
import { createReactToAngularComponent } from 'reactWrapper';

const reactToExport = [];
ReactComponents.forEach((comp) => {
  reactToExport.push(createReactToAngularComponent(comp));
});

@NgModule({
  declarations: [
    AppComponent,
    reactToExport
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    reactToExport
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```html
// Use the react component naturally as an Angular component. Just pass the [props] for React.
<reactComponentSelector [props]="{}"></reactComponentSelector>
```
