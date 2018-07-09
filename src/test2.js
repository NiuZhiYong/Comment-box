import wrapWithLoadData from './test1'

class InputWithUserName extends Component{
    render(){
        return <input value={this.props.data} />
    }
}

InputWithUserName = wrapWithLoadData(InputWithUserName,'username')
export default InputWithUserName