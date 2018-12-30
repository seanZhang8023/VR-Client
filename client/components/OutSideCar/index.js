import React,{Component} from  'react';
import $ from 'jquery'




class OutSideCar extends Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        let arr = [];
        for (let x = 1; x <= 36; x++) {
            arr.push("images/audiA6/audiA6-" + x + ".jpg.png");
        }
        $("#content").threesixty({ images: arr, method: 'auto', 'cycle': 1, direction: "backward", autoscrollspeed: "300" });

    }


    render() {

        return(

            <div id="content">Pic360Content</div>
        )


    }

};

export default OutSideCar
