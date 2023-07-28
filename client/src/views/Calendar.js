import React, { Component } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from '@fullcalendar/react';
import '../css/Calendar.css';


const Calc = () => {

    const dateClick = (info)=>{
        alert(info.dateStr);
    };
   
    return (
        <>
            <FullCalendar
                plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
                initialView={'dayGridMonth'}
                headerToolbar={
                    {
                        start: null, 
                        center: 'title',
                        // end: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek' 
                        end: 'today,prev,next'
                    }
                }
                height={"95vh"}
                dateClick={dateClick}
                events={[{title:'판매건수 : 23건', date:'2023-07-11',},{title:'판매건수 : 23건',date:'2023-07-13',}]}
            />
            <div>
                <form>
                    <table>
                        <tr>
                            <td><span>&#x2022;</span></td>
                            <td>날짜</td>
                            <td><input type='text'></input></td>
                        </tr>
                        <tr>
                            <td><span>&#x2022;</span></td>
                            <td>일정</td>
                            <td><textarea></textarea></td>
                        </tr>
                    </table>
                </form>
            </div>
        </>     
    );
}

export default Calc;