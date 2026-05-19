import React, { useState } from 'react';
import './IntroductionCard.css';

const IntroductionCard = () => {
  const [profile, setProfile] = useState({
    name: '이유빈',
    age: 23,
    hobby: '게임',
    favoriteFood: '갈비찜',
  });

  const handleChange = () => {
    const newName = prompt('이름을 입력하세요', profile.name);
    const newAge = prompt('나이를 입력하세요', profile.age);
    const newHobby = prompt('취미를 입력하세요', profile.hobby);
    const newFood = prompt('좋아하는 음식을 입력하세요', profile.favoriteFood);

    if (newName && newAge && newHobby && newFood) {
      setProfile({
        name: newName,
        age: newAge,
        hobby: newHobby,
        favoriteFood: newFood,
      });
    }
  };

  return (
    <div className="card">
      <div className="card-content">
        <p>이름: {profile.name}</p>
        <p>나이: {profile.age}</p>
        <p>취미: {profile.hobby}</p>
        <p>좋아하는 음식: <br />{profile.favoriteFood}</p>
      </div>
      <button className="change-btn" onClick={handleChange}>변경</button>
    </div>
  );
};

export default IntroductionCard;
