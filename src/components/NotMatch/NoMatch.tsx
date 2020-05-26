import * as React from 'react';
import { connect } from 'react-redux';
import error from '../../assets/images/error404.png';
// import MainScrollStyle from '../component/MainScrollStyle';
export interface IrouteNoMatchProps {
    clientHeight?: 0
}
interface IState {
}
class NoMatch extends React.Component<IrouteNoMatchProps, IState> {
    constructor(props: IrouteNoMatchProps) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        console.log(this.props.clientHeight)
        // ReactDOM.findDOMNode(this).addEventListener('load', () => {
        //     console.log(1111)
        // });
    }


    render() {
        // console.log(this.props.clientHeight)
        // const imgUrl=require("../images/error404.png");
        return (
            <div className="w100p">
                <div className='tc'>
                    <img alt="图片" src={error} />
                </div>
            </div>


        )
    }
}
const mapStateToProps = (state: any) => ({
    clientHeight: state.clientHeight,
})


export default connect(mapStateToProps)(NoMatch)



