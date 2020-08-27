import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import { useState } from "react";
import { useRef } from "react";

const Course = (props) => {
  const { courseName, courseFee, instructor, offeredBy, url } = props.course;

  //text change after click
  const [btnText, setBtnText] = useState("Enroll Now");
  const changeBtnText = (text) => setBtnText(text);

  //background color change after click
  const btnRef = useRef();
  const changeBgColor = () =>
    btnRef.current.setAttribute("class", "bg-secondary");

  return (
    <div>
      <Row className="bg-light p-3 mb-3 align-items-md-center">
        <Col md={6}>
          <Image src={url} thumbnail />
        </Col>
        <Col
          md={6}
          className="text-black-50 d-flex justify-content-md-center align-items-md-center"
        >
          <div className="mt-2">
            <h4>{courseName}</h4>
            <p>Offered By : {offeredBy}</p>
            <p>Instructor : {instructor}</p>
            <p>Price : ${courseFee}</p>
            <Button
              ref={btnRef}
              variant="info"
              onClick={() => {
                props.handleCourseClick(props.course);
                changeBtnText("Enrolled");
                changeBgColor();
              }}
            >
              {btnText}
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Course;
