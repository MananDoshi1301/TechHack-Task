import React from 'react';
import styles from './weAssure.module.css';
import liveCurrImg from '../../../Images/liveCurr.jpg';
import assuredInternImg from '../../../Images/assuredIntern1.jpg';
import indProjectsImg from '../../../Images/indProjects.jpg';
import learnTogImg from '../../../Images/learnTog.jpg';

const WeAssure = () => {
  const cardDataRow1 = [
    {
      title: '100% Live curriculum',
      text: 'We have zero pre-recorded sessions and absolutely focused on providing live training. Get answers to all the queries, Attend live practical and experience highly customised curriculum according to your learning skills.',
      img: liveCurrImg,
      imgColor: '#FF4F5A',
      colLg: 5,
    },
    {
      title: 'Assured Internships',
      text: 'You shall be provided with two assured internships as soon as you join the course.The tenure of internship shall be the same as of the course. Get hands-on &real-time experience, work with reputed firms, nourish your skills and stand a chance to get a full-time job offer.',
      img: indProjectsImg,
      imgColor: '#F1A350',
      colLg: 7,
    },
  ];

  const cardDataRow2 = [
    {
      title: 'Over 10 Industry projects',
      text: 'THT has partnered with some of the fastest growing start-ups to provide real time projects. You shall be getting in total 10 industrial projects. Partner with fellow students, work on projects, hands on tasks and duties. Exclusively for opening up the doors of career opportunities.',
      img: assuredInternImg,
      imgColor: '#DEF4FA',
      colLg: 6,
    },
    {
      title: 'Learn & Earn Together',
      text: 'Throughout each course, you shall be provided with freelance projects. Get compensated for utilising your skills, build up your freelancing portfolio and get honest recommendations from over 10 start-ups you work with. All in at ZERO cost.',
      img: learnTogImg,
      imgColor: '#ADBBF8',
      colLg: 6,
    },
  ];

  const totalRows = [{ obj: cardDataRow1 }, { obj: cardDataRow2 }];

  return (
    <div className='mainContainer'>
      <div className='container mb-5'>
        <div className={`${styles.weAssureTitle} display-1 text-center`}>
          We Assure You With!
        </div>
        {totalRows.map((row, key) => (
          <div className={`row my-5`} key={key}>
            {row.obj.map((card, key) => (
              <div
                className={`col-lg-${card.colLg} ${styles.custCard}`}
                key={key}
              >
                <h5
                  className={`display-5 text-center p-2 ${styles.custCardTitle} ${styles.custCardShadow} rounded-top`}
                  style={{ backgroundColor:card.imgColor }}
                >
                  {card.title}
                </h5>
                <div className={`card border-0 ${styles.custCardShadow}`}>
                  <div className='card-img-overlay'>                    
                    <p className={`card-text ${styles.custCardText} fs-4`}>
                      {card.text}
                    </p>
                  </div>
                  <img
                    src={card.img}
                    className={`img-fluid ${styles.custCardImg}`}
                    alt='...'
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeAssure;
