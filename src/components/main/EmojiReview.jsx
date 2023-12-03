import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import ListSet from '../main/ListSet'
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faThumbsUp, faComments, faBookBookmark } from "@fortawesome/free-solid-svg-icons";

const EmojiReviewOutDiv = styled.div`
    width: 100%;
    background-color: white;
    padding-bottom : 70px;
`
const ImageOutDiv = styled.div`
    width: 100%;
    height : default;
    text-align : center;
`

const ImagePreview = styled.div`
    font-size : 2.3em;
    padding :0.3em 0.2em 0.2em;
    

`
const Imageinput = styled.input`
    display:none;
    &:checked + label{
        opacity : 100%;
    }

`
const Imagelabel = styled.label`
display : inline-block;
height: 10px;
font-size : 1.0em;
opacity : 50%;
padding :1em 0.2em;
cursor: pointer;
`
const Listname = styled.div`
    font-size : 1.3em;
    font-family: "Pretendard-Regular";
    padding : 0.2em 0em 0.8em 1.8em;
    font-weight: 700;
`
const ListBr = styled.hr`
    background-color : #CECECE ;
    border : 0;
    width : 95%;
    height : 0.1em;
    margin : 1.5em auto;
`
const ListDiv = styled.div`
    width : 95%;
    margin : 0 auto;
`
function EmojiReview() {
    const [radioClicked, setRadioClicked] = useState("😄");
    const [radioTextClicked, setRadioTextClicked] = useState("재밌어요");

    const handleChange = (e) => {
        // console.log(`*****handleChange*****`);
        // console.log(`선택한 값 : ${e.target.value}`);
        setRadioClicked(e.target.value);
      };
    
    useEffect(()=>{
        switch(radioClicked){
            case "😄": setRadioTextClicked("재밌어요");break;
            case "😭": setRadioTextClicked("슬퍼요");break;
            case "🥹": setRadioTextClicked("감동이에요");break;
            case "🥱": setRadioTextClicked("지루해요");break;
            case "😡": setRadioTextClicked("화나요");break;
            case "😔": setRadioTextClicked("실망이에요");break;
            case "😍" : setRadioTextClicked("반했어요");break;
        }
    },[radioClicked]);

    //책 리스트 받아오기(api연결)

    const [bookList1, setBookList1] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const url = 'http://localhost:8080/bestseller';
          const response = await axios.get(url);
          const responseData = response.data.data;
          setBookList1(responseData);
          console.log(responseData);
  
        } catch(error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, []);

    const [bookList2, setBookList2] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const url = 'http://localhost:8080/bestseller';
          const response = await axios.get(url);
          const responseData = response.data.data;
          setBookList2(responseData.concat(responseData));
          console.log(responseData);
  
        } catch(error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, []);

    const [bookList3, setBookList3] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
        //   const url = 'http://localhost:8080/bestseller';
        //   const response = await axios.get(url);
        //   const responseData = response.data.data;
        //   setBookList3(responseData);
        //   console.log(responseData);
  
        } catch(error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, []);

    const [bookList4, setBookList4] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
        //   const url = 'http://localhost:8080/bestseller';
        //   const response = await axios.get(url);
        //   const responseData = response.data.data;
        //   setBookList4(responseData);
        //   console.log(responseData);
  
        } catch(error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, []);

    const [bookList5, setBookList5] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
        //   const url = 'http://localhost:8080/bestseller';
        //   const response = await axios.get(url);
        //   const responseData = response.data.data;
        //   setBookList5(responseData);
        //   console.log(responseData);
  
        } catch(error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, []);



    return (
        <EmojiReviewOutDiv>
            <ImageOutDiv>
                        <ImagePreview alt="emoji1">
                            <Imageinput type="radio" id="😄" name="emoji" value="😄" 
                            checked={radioClicked==="😄"} onChange={handleChange}/>
                            <Imagelabel for="😄">😄</Imagelabel>

                            <Imageinput type="radio" id="😭" name="emoji" value="😭" 
                            checked={radioClicked==="😭"} onChange={handleChange}/>
                            <Imagelabel for="😭">😭</Imagelabel>
                        
                            <Imageinput type="radio" id="🥹" name="emoji" value="🥹" 
                            checked={radioClicked==="🥹"} onChange={handleChange}/>
                            <Imagelabel for="🥹">🥹</Imagelabel>
                        
                            <Imageinput type="radio" id="🥱" name="emoji" value="🥱" 
                            checked={radioClicked==="🥱"} onChange={handleChange}/>
                            <Imagelabel for="🥱">🥱</Imagelabel>
                        
                            <Imageinput type="radio" id="😡" name="emoji" value="😡" 
                            checked={radioClicked==="😡"} onChange={handleChange}/>
                            <Imagelabel for="😡">😡</Imagelabel>
                        
                            <Imageinput type="radio" id="😔" name="emoji" value="😔" 
                            checked={radioClicked==="😔"} onChange={handleChange}/>
                            <Imagelabel for="😔">😔</Imagelabel>
                        
                            <Imageinput type="radio" id="😍" name="emoji" value="😍" 
                            checked={radioClicked==="😍"} onChange={handleChange}/>
                            <Imagelabel for="😍">😍</Imagelabel>
                        </ImagePreview>
            </ImageOutDiv>
            <Listname>{radioClicked} '{radioTextClicked}'가 많은 순</Listname>
            <ListDiv>
            <ListSet bookList={bookList2}/>
            </ListDiv>
            <ListBr/>
            <Listname><FontAwesomeIcon icon={faRobot} /> AI가 분석한 긍정적인 후기 순</Listname>
            <ListSet bookList={bookList2}/>
            <ListBr/>
            <Listname><FontAwesomeIcon icon={faThumbsUp} /> 긍정적인 후기 순</Listname>
            <ListSet bookList={bookList3}/>
            <ListBr/>
            <Listname><FontAwesomeIcon icon={faComments} /> 리뷰 많은 많은 순</Listname>
            <ListSet bookList={bookList4}/>
            <ListBr/>
            <Listname><FontAwesomeIcon icon={faBookBookmark} /> 알라딘 베스트셀러</Listname>
            <ListSet bookList={bookList5}/>
        </EmojiReviewOutDiv>
    )
}

export default EmojiReview;