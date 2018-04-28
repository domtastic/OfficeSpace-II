import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import {Card, Row, CardHeader, Button} from 'reactstrap';
import './dnd.css';
import SideBar from '../sidebar/side-bar';
import Header from '../Header/Header';

class Basic extends Component {
  constructor() {
    super()
    this.state = { files: [] }
  }

  onDrop(files) {
    this.setState({
      files
    });
  }

  render() {
    return (
  <div className="top">  


<Card id="dndCard" >

<CardHeader style={{backgroundColor: "rgb(83, 198, 186)"
}}>
          <h2 style={{marginTop:"20px", color:"#ffffff", textAlign:"center"}}>Upload</h2>
          </CardHeader>
          <ul>
            {
              this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
            }
          </ul>
        <div className="dropzone">
          <Dropzone onDrop={this.onDrop.bind(this)}  style={{height:"300px", width:"75%", borderStyle:"dashed", borderColor:"#4363A8 ", marginTop:"45px", marginLeft:"80px"}}>
          <img src={require("../img/clouds.png")} id="image" />
            <p style={{fontSize:"30px", marginLeft:"70px"}}>Drag & Drop Files to Upload</p>
          </Dropzone>
                     <Button id="dndButton">Upload</Button>

        </div>

      
     
   
  </Card>

   </div>   
       


    );
  }
}
export default Basic;