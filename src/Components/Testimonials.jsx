import React,{useState} from 'react'
const testimonials = [
    {
      img: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?t=st=1720338348~exp=1720341948~hmac=6f049a87b267bc845780a87c724a75317bc71e086abdadf7bd818bb111cf475c&w=740",
      author: "Samuel Marksan",
      Country:"Berlin,Germany",
      rating:<i class="fa-solid fa-star"></i> ,
     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1720339157~exp=1720342757~hmac=fe393d4523f0a1b6b633344e90df21367118a4a20a7b15213729721d0ae2f4bf&w=996",
       author: "Jordan ",
       Country:"Italiy,France",
       rating:<i class="fa-solid fa-star"></i> ,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
     
    },
    {
      img: "https://img.freepik.com/free-photo/businessman-dress-code-checking-his-blazer_114579-15934.jpg?t=st=1720339720~exp=1720343320~hmac=627a5800e7055a31d5308922fbfb907e7871b24703dce58438771ff78b39af85&w=996",
      author: "Adam Brucee",
      Country:"Texas,Alabama",
      rating:<i class="fa-solid fa-star"></i> ,
     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: "https://img.freepik.com/free-photo/young-casual-woman-style-isolated-white-wall_231208-1199.jpg?t=st=1720339758~exp=1720343358~hmac=eec6eab35a3def9a4e8d2b2d5895008b65ef2575afa2011bd9b40bcc1765333f&w=996",
      author: "Michale",
      Country:"Sydeny,Australia",
      rating:<i class="fa-solid fa-star"></i> ,
     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  



export const Testimonials = () => {
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
      <div className='boder'>
     
        <div  >
            
          <img src={testimonials[data].img} alt="" width={"300px"} height={"300px"} style={{borderRadius:"50%",objectFit:"cover"}} />
          <div className="btns">
       <button onClick={previous}>◀</button>
       <button onClick={next}>▶</button>
       </div>
          <p>{testimonials[data].author}</p>
          <p>{testimonials[data].Country}</p>
          <p style={{textAlign:"center"}}>{testimonials[data].text}</p>
          <p>{testimonials[data].rating}</p>
        </div>
        <div>
          {testimonials.map((empty, index) => (
            <span
              onClick={() => navigationDots(index)}
              key={index}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: data === index ? " rgb(105, 145, 255)" : "white",
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
