import React,{useState, useRef} from 'react'
import {Link} from 'gatsby'
import Logo from '../../static/logo/main_logo.png'


const Navigation = () =>{


    const [toggled, setToggled] = useState(false);

	const pages = [
		 'Home',
		 'About-the-Author',
		 'Books',
		 'Contact'
	] 

	let Listed = pages.map((e, i) =>{
 		
		var newUrl = ((e).replace(/[ /]/g,"-").trim().toLowerCase());
        const filterUrl = (newUrl === 'home') ? '/' : `/${newUrl}`;
        const fNum =  i==0? 'f-num-list' : '';
        const nwList = e.replace(/[/-]/g," ").trim();

		return (
			<li key={i}>
				<Link 
					to={filterUrl}>
                         {nwList}    
				</Link>	
			</li>
		)
    })          
    
    const onClickEvent = (e) =>{
        setToggled(!toggled);
    }   


    return(
        <>
            <nav className="navigation">
                <div className="two-grid-layout" id="desktop-nav">
                    <div className="author-logo">
                        <Link to="/">
                            <img src={Logo}/>
                        </Link>
                    </div>

                    <div className="navlist">
                        <ul>
                            {
                                Listed
                            }
                        </ul>
                    </div>
                </div>
                

                <ul id={toggled ? 'active-hamburger-nav': 'non-active-hamburger'}	
					onClick={e => onClickEvent(e)}>
					<span className="hamburger-span"></span>
					<span className="hamburger-span"></span>
				</ul>


                <section className={toggled ? 'h-active-nav': 'h-non-active-nav'}>

                    <span className="close-mark" onClick={e =>onClickEvent(e)}>
                            <span className="hamburger-x-mark"></span>
                            <span className="hamburger-x-mark"></span>
                    </span>


                    <ul>

                        <p className="list-label">
                            Navigations.
                        </p>

                        {
                            Listed
                        }

                    </ul>
                </section> 
            </nav>
        </>
    )
}

export default Navigation;
