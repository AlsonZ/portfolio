import React, {useState, useEffect} from 'react';
import ScrollTo from 'react-scroll-into-view';
import './home.css';
import icons from "../imgs/icons.svg";

function Home() {

  let [text, setText] = useState("");
  let [startType, setStartType] = useState(false);
  let [startDelete, setStartDelete] = useState(false);
  let [indexToType, setIndexToType] = useState(null);
  const textToType = ["Web Developer", "Student"]

  const typeText = () => {
    setText(text+=textToType[indexToType].charAt(text.length));
  }
  const deleteText = () => {
    setText(text.slice(0,-1));
  }
  useEffect(() => {
    if(startType && text.length < textToType[indexToType].length ) {
      // console.log('start typing');
      setTimeout(()=>{setTimeout(typeText(),500)},100);
    } else if(startType && text.length === textToType[indexToType].length) {
      // console.log('Stop typing');
      setStartType(false);
      setTimeout(()=>{setTimeout(setStartDelete(true),100)},1000);
    }
    if(startDelete && text.length > 0) {
      // console.log('Start deleting');
      setTimeout(()=>{setTimeout(deleteText(),500)},100);
    } else if(startDelete && text.length === 0) {
      // console.log('Stop deleting');
      setStartDelete(false);
      setTimeout(()=>{setTimeout(() => {
        if(indexToType===0) {
          type(1);
        } else {
          type(0);
        }
      },200)},200);
    }
  },[startDelete, startType, text.length])

  const type = (index) => {
    setIndexToType(index);
    setStartType(true);
  }
  
  useEffect(() => {
    type(0);
  },[])

  return (
  <div id="home" className="home-container">
      <div className="hero-image">
        <div className="hero-overlay">
          <div className="home-text">
            <h1 className="home-title">HI, I'M ALSON</h1>
            <div className="home-description-container">
              <span className="home-normal-text">22 year old&nbsp;</span>
              <span className="home-typing-text">{text}</span>
              <span className="home-blinking-cursor">|</span>
            </div>

            {/* <div className="home-description">Web Developer</div> */}
            <div className="home-arrow-container">
              <ScrollTo selector='#projects'>
                <svg className="expand-more-icon">
                  <use xlinkHref={`${icons}#icon-expand-more`} />
                </svg>
              </ScrollTo>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
