import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Modal from 'react-modal';
import logo from './podium_logo.png';
import phone from './phone_hand.png';
import './App.css';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    borderRadius          : '20px',
    backgroundColor       : 'lightgray'
  },
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.6)'
  }
};

class App extends Component {

  constructor() {
   super();

   this.state = {
     modalIsOpen: false
   };

   this.openModal = this.openModal.bind(this);
   this.afterOpenModal = this.afterOpenModal.bind(this);
   this.closeModal = this.closeModal.bind(this);
 }

 openModal() {
   this.setState({modalIsOpen: true});
 }

 afterOpenModal() {
   // references are now sync'd and can be accessed.
   this.subtitle.style.color = '#878f92';
 }

 closeModal() {
   this.setState({modalIsOpen: false});
 }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="po_header floatleft" alt="logo" />
          <h1 className="po_header floatleft" style={{"marginTop": 5}}>PODIUM</h1>
          <ul className="floatright">
            <li><a href="#">PRODUCT</a></li>
            <li><a href="#">RESOURCES</a></li>
            <li><a href="#">WATCH DEMO</a></li>
            <li><a href="#">LOGIN</a></li>
          </ul>
        </header>
          <img src={phone} className=" section_one_body floatleft" alt="mobile"/>
          <div className=" section_one_body"> Some text with a class added for cool styles </div>
          <div className=" section_one_body"> Some more text with a different class for even more cool styles </div>
          <button className="watch_demo_button " id="openModal" onClick={this.openModal}> ▶ WATCH DEMO </button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
          <a href="#" className="floatright close_modal" onClick={this.closeModal}>x</a>
          <div style={{"textAlign": "center"}}>
          <img src={logo} className="po_header" alt="logo" />
          <p ref={subtitle => this.subtitle = subtitle}>Enter your email to watch</p>
          <form>
            <input className="modal_input_text" placeholder="ENTER.EMAIL@COMPANY.COM"/>
            <div style={{marginTop: 20}}>(no spam, we promise!)</div>
            <button className="watch_demo_button modal">▶ WATCH DEMO </button>
          </form>
          </div>

        </Modal>
          <button className="learn_more_button "> LEARN MORE </button>

      </div>
    );
  }
}

export default App;
