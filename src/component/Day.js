import {useParams} from 'react-router-dom'
import Word from '../component/Word';
import useFetch from '../hooks/useFetch';

function Day(){
    const a = useParams();
    const day = a.day;
    console.log(a);
    //const wordList = dummy.words.filter(word=>(
        //word.day === Number(day)))
    const words = useFetch(`http://localhost:3001/words?day=${day}`);
    
    return(
        <div className="section">
        <h2> Day{day}</h2>
        <table className="table">
            <colgroup>
                <col width="20%"/>
                <col width="20%"/>
                <col width="20%"/>
                <col width="20%"/>

            </colgroup>
            <tbody>
                {words.map(word=>(
                    <Word word={word} key={word.id}/>
                ))}
            </tbody>
        </table>
        </div>
    )
}

export default Day;