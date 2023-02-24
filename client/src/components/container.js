import React, { useEffect, useState } from 'react';
import { ReactDOM } from 'react';
import styles from '../styles/navstyles.module.css'
import Test from '../components/test'
import Cards from '../components/cards'

const Container = () => {
    
    const def = `https://functions-chat-reactcomm.harperdbcloud.com/roster`;
    const [tag, setTag] = useState(def);
    const [filter, setFilter] = useState('')
    const filters = ['', 'male', 'female', 'champion', 'team'];

    useEffect(() => {
        setTag("");
    },[]);

    const filterTags = tags => {
        setTag(tags);
    }

    const fullRoster = () => {
        setTag(`https://functions-chat-reactcomm.harperdbcloud.com/roster`)
        console.log('url',tag)
    }

    const genderRoster = gen => {
        setTag(`https://functions-chat-reactcomm.harperdbcloud.com/roster/divisions/${gen}`);
        setFilter(gen)
        console.log('url',filter,tag)
    }

    const championRoster = champ => {
        setTag(`https://functions-chat-reactcomm.harperdbcloud.com/roster/profiles/${champ}`);
        setFilter(champ)
        console.log('url',tag)
    }

    const tagRoster = team => {
        setTag(`https://functions-chat-reactcomm.harperdbcloud.com/roster/teams/${team}`);
        console.log('url',tag)
    }

    return(
        <>
        <div className={`${styles.nav}`}>
            <input style={{display: 'flex', justifyContent: 'space-evenly'}} type="checkbox" />
                <span></span>
                <span></span>
                <div className={`${styles.menu}`}>
                    <li onClick={() => fullRoster(filters[0])}><a href="#">home</a></li>
                    <li onClick={() => genderRoster(filters[1])}><a href='#'>Men</a></li>
                    <li onClick={() => genderRoster(filters[2])}><a href='#'>Women</a></li>
                    <li onClick={() => championRoster(filters[3])}><a href='#'>Champions</a></li>
                    <li onClick={() => tagRoster(filters[4])}><a href='#'>Tag</a></li>
                </div>
        </div>
        <Test tags={tag} filters={filter}/>
        </>
    )
}

export default Container;