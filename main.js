import {ToyReact, Component} from './ToyReact'

class MyComponent extends Component {
    render() {
        return <div>
            {this.children}
        </div>
    }
}

let a = <MyComponent id="ida" name="namea">
    <div>aaa</div>
</MyComponent>

ToyReact.render(a, document.body)