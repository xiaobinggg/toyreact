import {ToyReact, Component} from './ToyReact'

class MyComponent extends Component {
    render() {
        return <div>aaa</div>
    }
}

let a = <MyComponent id="ida" name="namea"></MyComponent>

ToyReact.render(a, document.body)