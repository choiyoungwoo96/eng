import { useRef } from "react";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router";

export default function Create(){
    const days = useFetch("http://localhost:3001/days");
    const navigate = useNavigate();
    console.log(days);
    function onSubmit(e){
        e.preventDefault();
        
         fetch(`http://localhost:3001/words/`,{
            method : 'POST',
            headers:{
                "Content-Type" : "application/json",
            },
            body : JSON.stringify({
                day: engDay.current.value,
                eng :engRef.current.value,
                kor :engKor.current.value ,
                isDone : false,
            })
        })
        .then(res=>{
            if(res.ok){
                alert("생성이 완료되었습니다");
                navigate(`/day/${engDay.current.value}`);
            }
        });
        
    }
    const engRef =useRef(null);
    const engKor =useRef(null);
    const engDay =useRef(null);

    return(
        <form onSubmit={onSubmit}>
            <div className="inputBox">
                <label>Eng</label>
                <input type="text" placeholder="word" ref={engRef}></input>
            </div>
            <div className="inputBox">
                <label>kor</label>
                <input type="text" placeholder="kor" ref={engKor}></input>
            </div>
            <div className="inputBox">
                <label>Day</label>
                <select ref={engDay}>
                    {days.map(day=>(
                        <option key={day.id} value={day.day}>{day.day}</option>
                    ))}
                </select>
            </div>
            <button>저장</button>
        </form>
    )
}