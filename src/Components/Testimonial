import React, { useState } from 'react';

const testimonials = [
  {
    img: "https://img.freepik.com/free-photo/front-view-wild-tiger-nature_23-2150747950.jpg?uid=R100292432&ga=GA1.1.454077324.1719049951&semt=ais_hybrid",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolor cupiditate veritatis quasi non aliquam alias similique, laboriosam assumenda voluptates?",
    author: "Yash Bhai"
  },
  {
    img: "https://img.freepik.com/free-photo/amazing-bengal-tiger-nature_475641-1277.jpg?uid=R100292432&ga=GA1.1.454077324.1719049951&semt=ais_hybrid",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolor cupiditate veritatis quasi non aliquam alias similique, laboriosam assumenda voluptates?",
    author: "Shivang Bhai"
  },
  {
    img: "https://img.freepik.com/free-photo/amazing-bengal-tiger-nature_475641-1137.jpg?uid=R100292432&ga=GA1.1.454077324.1719049951&semt=ais_hybrid",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolor cupiditate veritatis quasi non aliquam alias similique, laboriosam assumenda voluptates?",
    author: "Aman Bhai"
  },
  {
    img: "https://img.freepik.com/free-photo/cutes-tiger-nature_23-2150853097.jpg?t=st=1720181830~exp=1720185430~hmac=4c58488a82ddd27fda8bccd5801926c6054f435538df6a3fb1fe188edc72d8cb&w=360",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolor cupiditate veritatis quasi non aliquam alias similique, laboriosam assumenda voluptates?",
    author: "Gola Bhai"
  },
];

const Testimonial = () => {
  const [data, setData] = useState(0);

  const previous = () => {
    setData((x) => (x === 0 ? testimonials.length - 1 : x - 1));
  };

  const next = () => {
    setData((x) => (x === testimonials.length - 1 ? 0 : x + 1));
  };

  const navigationDots = (index) => {
    setData(index);
  };

  return (
    <div>
      <button onClick={previous}>◀</button>
      <button onClick={next}>▶</button>
      <div>
        <img src={testimonials[data].img} alt="" width={"100px"} height={"100px"} />
        <p>{testimonials[data].text}</p>
        <p>{testimonials[data].author}</p>
      </div>
      <div>
        {testimonials.map((Aman, index) => (
          <span
            onClick={() => navigationDots(index)}
            key={index}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: data === index ? "blue" : "white",
              display: "inline-block",
              marginLeft: "5px",
              cursor: "pointer"
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;