import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import styles from './testimonialCarousel.module.css';

const TestimonialCarousel = () => {
  const data = [
    {
      name: 'Ashutosh Singh',
      img: 'https://techhack.technology/images/avatar-1-p-500.png',
      text: 'I was interested in cyber security from 10th class but I had no any mentor who could guide me in cyber security.Then during the college vacations I joined the CEH training course offered here.After 3-4 classes, I observed that he teaches us as a friend and so there is an interactive environment and not one full of hesitative vibes.',
    },
    {
      name: 'AYUSH SHRIVASTAVA',
      img: 'https://techhack.technology/images/avatar-1-p-500.png',
      text: 'I had an enormous keen in learning Cyber Security and Ethical Hacking. It has not been even two months and I have effectively done a lot with his course and saw the huge change in me. The motivation and trainings have been greatly helpful and I love how TechHack gives an arranged and a described course with an efficient value which even a normal person can afford.',
    },
    {
      name: 'Utkarsh Sharma',
      img: 'https://techhack.technology/images/avatar-1-p-500.png',
      text: 'I feel very happy to have joined TechHack as I have got to learn and explore so much into the cyber-security field. I specially love how our instructor helps each one of us to grow independently and not spoon fed. He helps us at each step and this has been the greatest learning course.Never seen such an interactive one!',
    },
    {
      name: 'Avi Chakravarti',
      img: 'https://techhack.technology/images/avatar-1-p-500.png',
      text: 'I joined this training with a small vision of being a cyber security expert in future and this course helped me to learn and refine my skills. From then, I have reported 10+ vulnerabilities to the Indian Govt. and 4+ vulnerabilities to private companies.',
    },
    {
      name: 'Yash Khare',
      img: 'https://techhack.technology/images/avatar-1-p-500.png',
      text: 'Joining TechHack course really helped me a lot in developing my hacking skills. TechHack provides a structured and well defined course with an economical price which even an average person can afford.',
    },
    {
      name: 'Rahul Rathore',
      img: 'https://techhack.technology/images/avatar-1-p-500.png',
      text: 'The courses are really educative and go smoothly. At the end of the day, I do not feel like I just took a lecture from a trainer, rather I feel like I have spent some quality time with a friend learning something new.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(data.length);
  const [progress, setProgress] = useState((1 / totalSlides) * 100);

  const carouselProps = {
    showThumbs: false,
    swipeable: true,
    autoPlay: true,
    interval: 8000,
    transitionTime: 800,
    infiniteLoop: true,
    stopOnHover: true,
    showStatus: false,
    showIndicators: false,
    // centerMode: true,
  };

  const arrowStyles = {
    position: 'absolute',
    top: 'calc(70%)',
    cursor: 'pointer',
  };

  const rightArrow = (onClickHandler, label) => {
    return (
      <div
        style={{ ...arrowStyles, right: '0' }}
        onClick={onClickHandler}
        title={label}
      >
        <i className='fas fa-long-arrow-alt-right fa-5x arrow-icon' style={{color:'#2C4E9F'}}></i>
      </div>
    );
  };

  const leftArrow = (onClickHandler, label) => {
    return (
      <div
        style={{ ...arrowStyles, left: '30px', zIndex: '1' }}
        onClick={onClickHandler}
        title={label}
      >
        <i className='fas fa-long-arrow-alt-left fa-5x arrow-icon' style={{color:'#2C4E9F'}}></i>
      </div>
    );
  };

  const slideChange = (current) => {
    const value = Number((current + 1) / totalSlides) * 100;
    setCurrentSlide(current + 1);
    setProgress(value);
  };

  return (
    <div>
      <div className='container my-5'>
        <Carousel
          className=''
          {...carouselProps}
          renderArrowNext={rightArrow}
          renderArrowPrev={leftArrow}
          onChange={(current) => {
            slideChange(current);
          }}
        >
          {data.map((user, key) => (
            <div key={key}>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-1'></div>
                  <div className='col-lg-2 col-md-2 col-sm-2 col-2 d-flex align-items-center justify-content-center'>
                    <img
                      src={user.img ? user.img : ''}
                      className={`img-fluid ${styles.userImg}`}
                      alt=''
                    />
                  </div>
                  <div className='col-lg-1'></div>

                  <div className='col-lg-7 d-flex align-items-center justify-content-center'>
                    <div>
                      <div
                        className={`text-uppercase display-1 ${styles.userName}`}
                      >
                        {user.name}
                      </div>
                      <div className={`${styles.userText} fs-5`}>
                        "{user.text}"
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-1'></div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        <div>
            <div className='d-flex  justify-content-end align-items-center mt-3'>
              <div className={`text-muted`}>0{currentSlide}</div>
              <div className={`${styles.carouselBar} mx-3 d-flex align-items-center`}>
                <span
                  className={`${styles.carouselBarSpan}`}
                  style={{
                    background: 'linear-gradient(45deg, #2C4E9F, #CDE0FD)',
                    width: `${progress}%`,
                    height: '5px',
                  }}
                ></span>
                <span
                  className={`${styles.carouselBarSpan}`}
                  style={{
                    backgroundColor: 'gray',
                    width: `${100 - progress}%`,
                    height: '1px',
                  }}
                ></span>
              </div>
              <div className={`text-muted`}>0{totalSlides}</div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
