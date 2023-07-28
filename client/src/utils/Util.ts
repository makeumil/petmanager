import React, {useState, useEffect} from 'react';
import moment from 'moment';
import 'moment/locale/ko';

export const getDayMinuteCounter = (date?: Date): number | string => {
    if (!date) {
      return '';
    }
  
    // moment 예제
    // format에 맞게 출력된다.
    // const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');
    // console.log(nowTime);
    // 출력 결과: 2020-08-23 12:54:30

    const today = moment();
    const postingDate = moment(date);
    const dayDiff = postingDate.diff(today, 'days');
    const hourDiff = postingDate.diff(today, 'hours');
    const minutesDiff = postingDate.diff(today, 'minutes');
    
    if (dayDiff === 0 && hourDiff === 0) { // 작성한지 1시간도 안지났을때
      const minutes = Math.ceil(-minutesDiff);
      return minutes + '분 전';		 // '분' 로 표시
    }
  
    if (dayDiff === 0 && hourDiff <= 24) { // 작성한지 1시간은 넘었지만 하루는 안지났을때, 
      const hour = Math.ceil(-hourDiff);
      return hour + '시간 전';		 // '시간'으로 표시
    }
  
    return -dayDiff + '일 전';		 // '일'로 표시
  };