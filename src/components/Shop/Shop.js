import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Course from "../Course/Course";
import Cart from "../Cart/Cart";
import fakeData from "../../fakeData";

const Shop = () => {
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([]);
  const mostPopularCourse = fakeData.slice(0, 12);
  useEffect(() => {
    const courseList = mostPopularCourse;
    setCourses(courseList);
  }, []);

  const handleCourseClick = (course) => {
    let duplicateCourse = cart.find(
      (items) => items.courseName === course.courseName
    );

    if (duplicateCourse) {
      alert("Course already added in the cart!");
      return;
    }

    const newCart = [...cart, course];
    setCart(newCart);
  };

  return (
    <Container>
      <Row>
        <Col md={8}>
          <h2 className="text-center mt-5 mb-5">Most Popular Courses</h2>
          {courses.map((course) => (
            <Course
              key={course.courseId}
              course={course}
              handleCourseClick={handleCourseClick}
            ></Course>
          ))}
        </Col>
        <Col md={4}>
          <h2 className="text-center mt-5 mb-5">Cart</h2>
          <Cart cart={cart}></Cart>
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
