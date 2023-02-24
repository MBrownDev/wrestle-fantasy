import cstyle from '../styles/cstyles.module.css';
import React, { useEffect, useState } from "react";
//import axios from 'axios'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

import Container from './container';
import data from '../data/data.json'

function Items({ e }) {
    const [isHover, setIsHover] = useState();
    const [items, getItems] = useState([]);

    useEffect(() => {
        function fetchData () {
            fetch(`https://functions-chat-reactcomm.harperdbcloud.com/roster`, {
            method: 'GET', // or 'PUT'

        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            getItems(data)
            data.map(results => {
                //console.log(results.name)
            })
        })
            }
            fetchData()
    },[]);

    const handleMouseEnter = () => {
        setIsHover(!isHover);
        console.log(e.name)
    }

    const handleMouseLeave = () => {
        setIsHover(!isHover);
    };

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    function changeStylesheetRule(stylesheet, selector, property, value) {
        
    
        for(var i = 0; i < cstyle.cssRules.length; i++) {
            var rule = cstyle.cssRules[i];
            if(rule.selectorText === selector) {
                rule.style[property] = value;
                return;
            }
        }
      
        stylesheet.insertRule(selector + " { " + property + ": " + value + "; }", 0);
    }

    return(
        <div key={e.id} style={isHover ? e.data.card0 : e.data.card} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={cstyle.icons}>
                <FontAwesomeIcon className={isHover ? cstyle.fa : cstyle.fa0} onClick={() => openInNewTab(e.socials.instagram)} icon={faInstagram} />
                <FontAwesomeIcon className={isHover ? cstyle.fa : cstyle.fa0} icon={faTwitter} />
                <FontAwesomeIcon className={isHover ? cstyle.fa : cstyle.fa0} icon={faFacebook} />
            </div>
        </div>
    )

}
const Cards = ({tags, filters}) => {

    //console.log(cstyle.fa)
    const [items, getItems] = useState([])

    const fullRoster = () => {
        fetch(`https://functions-chat-reactcomm.harperdbcloud.com/roster`, {
            method: 'GET', // or 'PUT'
        })
        .then(respone => respone.json())
        .then(data => {
            console.log(data)
            getItems(data)
        })
    }

    const genderRoster = gen => {
        fetch(`https://https://functions-chat-reactcomm.harperdbcloud.com/roster/divisions/${gen}`, {
            method: 'GET', // or 'PUT'
        })
        .then(respone => respone.json())
        .then(data => {
            console.log(data)
            getItems(data)
        })
    }

    const championRoster = champ => {
        fetch(`https://https://functions-chat-reactcomm.harperdbcloud.com/roster/profiles/${champ}`, {
            method: 'GET', // or 'PUT'
        })
        .then(respone => respone.json())
        .then(data => {
            console.log(data)
            getItems(data)
        })
    }

    const tagRoster = team => {
        fetch(`https://https://functions-chat-reactcomm.harperdbcloud.com/roster/teams/${team}`, {
            method: 'GET', // or 'PUT'
        })
        .then(respone => respone.json())
        .then(data => {
            console.log(data)
            getItems(data)
        })
    }

    console.log(tags);


    useEffect(() => {
        function fetchData () {
            fetch(tags, {
            method: 'GET', // or 'PUT'

        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            getItems(data)
            data.map(results => {
                console.log(results.name)
            })
        })
            }
            console.log(tags)
            fetchData()
    },[tags]);


    return(
        <>
        <div className={cstyle.container}>
            {items.map((e, index)=>{
            return <Items e = {e} />
            })}
        </div>
        </>
    )
}


export default Cards;