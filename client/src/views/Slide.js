import React, { Component, useState  } from "react";
import Slider from "react-slick";
import styles from 'slick-carousel/slick/slick.css';
import theme from 'slick-carousel/slick/slick-theme.css';
import styled from "styled-components";
import { ReactComponent as Next } from "../svg/right.svg";
import { ReactComponent as Prev } from "../svg/left.svg";

function Slide(props) {

  const { contents } = props;    

  const [initSlide, setInitSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [state,  setState] = useState({
    activeIndex: 0,
    changedIndex: 0,
  });

  const openModalHandler = () => {
    setInitSlide(state.changedIndex);
    setIsOpen(!isOpen)   
  };

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500, 
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    initialSlide: initSlide,
    beforeChange: (current, next) => setState({ activeIndex: next  }),
    afterChange: current => setState({ changedIndex: current }),
    nextArrow: (
        <Div>
          <Next />
        </Div>
      ),
      prevArrow: (
        <DivPre>
          <Prev />
        </DivPre>
      ),
  };

  return ( 
      <>

      <div className={styles.carousel}>
        <StyledSlider {...settings}>
          {contents.map((image)=>{
            return (
               <SliderInfo>
                  <SliderWrap>
                    <SliderImg src={image} onClick={openModalHandler}/> 
                  </SliderWrap>   
               </SliderInfo> 
            );
          })}
        </StyledSlider>     
      </div>

      {isOpen ? 
        <div className={styles.carousel}>
        <ModalBackdrop>         
            <ModalView onClick={(e) => e.stopPropagation()}>
              <ExitBtn onClick={openModalHandler}>x</ExitBtn>
              <StyledSlider {...settings}>
              {contents.map((image)=>{
                return (
                  <ModalInfo>
                     <ModalImg src={image}/> 
                  </ModalInfo>   
                );
               })}
              </StyledSlider>
            </ModalView>
          </ModalBackdrop> 
          </div>
          : null
      }

      </>
  );
 
}



const StyledSlider = styled(Slider)`

    position: relative;
    .slick-prev::before,
    .slick-next::before {
    opacity: 0;
    display: none;
    }
    .slick-list{

        width: 100%;
        margin: 0 auto;
    }
    .slick-dots{
        bottom: 30px;
        margin-top: 200px;
    }
    .slick-dots li{
        margin: 1px;
    }    
    .slick-dots li button:before{
        font-size: 15px;
        color: wheat;
    }
    .slick-slide div {
        //슬라이더  컨텐츠
        cursor: pointer;
    }
`;

const SliderInfo = styled.div`
    width: 100%; 
    height: 100%;
`;
const SliderWrap = styled.div`
    position: relative;
    padding-top: 120%;  
    overflow: hidden; 
`;
const SliderImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: auto;
    object-fit:cover;
`;



const DivPre = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  left: 4px;
  z-index: 10;
  text-align: left;
  line-height: 30px;
`;

const Div = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  right: 4px;
  z-index: 10;
  text-align: right;
  line-height: 30px;
  opacity: 0.8;
`;


// 모달 css
const ModalContainer = styled.div`
  // Modal을 구현하는데 전체적으로 필요한 CSS를 구현
  display : flex;
  justify-content : center;
  align-items : center;
  height : 100%;
`;

const ModalBackdrop = styled.div`
  // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
  z-index: 300; //위치지정 요소
  position: fixed;
  display : flex;
  justify-content : center;
  align-items : top;
  // background-color: rgba(0,0,0,0.4);
  background-color: rgb(20, 20, 20);
  border-radius: 10px;
  top : 0;
  left : 0;
  right : 0;
  bottom : 0;
  width: 100%;
  height: 100%;
`;


const ExitBtn = styled.button`
  position: absolute;
  z-index: 999;
  background-color : black;
  border-radius: 10px;
  text-decoration: none;
  margin: 10px;
  width: 40px;
  height: 40px;
  color: white;
  font-size: 1.5rem;
  opacity: 0.5;
`;

const ModalView = styled.div.attrs((props) => ({
  role: 'dialog',
}))`
  // Modal창 CSS를 구현합니다.
  display: flex;
  align-items: left;
  vertical-align: top;
  flex-direction: column;
  // border-radius: 20px;
  width: 100%;
  heigth: 100%;

 `;

 const ModalInfo = styled.div`
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // vertical-align: bottom;
    // width: 100%; 
    // height: 100vh;

     display: flex;
     justify-content: center;
     align-items: center;
     vertical-align: middle;
     width: 100%; 
     height: 100vh;

`;
const ModalWrap = styled.div`
    position: relative;
    width: 100%; 
    height: 100%;
    padding-top: 120%;  
    overflow: hidden; 
    background-color: cyan;
`;
const ModalImg = styled.img`
    width: 100%;
    height: auto;
    margin-top: 30%;
`;

export default Slide;