import React from "react";
import { ListGroup, Image } from "react-bootstrap";

const Cart = (props) => {
  const totalPrice = props.cart.reduce(
    (total, item) => total + item.courseFee,
    0
  );

  return (
    <div>
      <div className="d-flex justify-content-md-center align-items-md-center">
        <div className="mt-3">
          <h4>Enrolled Courses : {props.cart.length}</h4>
          <p>Total Price : ${totalPrice}</p>
          <h6>Enroll Courses List</h6>
          <ListGroup>
            {props.cart.map((course) => (
              <ListGroup.Item key={course.courseId}>
                <Image src={course.url} style={{ height: "30px" }} /> -{" "}
                {course.courseName} - ${course.courseFee}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default Cart;
