import {Link} from 'react-router-dom'

function Header(){
return(
    <div className="header">
        <h1><Link to="/">토익 영단어</Link></h1>
            <div>
                <button><Link to="/create">단어 추가</Link></button>
                <button><Link to="/createday">Day 추가</Link></button>
            </div>
    </div>
)
}
export default Header;