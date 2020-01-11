import React, { useReducer, useEffect, useState } from 'react'

import { ThemeContext } from './contexts'

import PostList from './post/PostList'
import CreatePost from './post/CreatePost'
import UserBar from './user/UserBar'
import Header from './Header'
import ChangeTheme from './ChangeTheme'

import appReducer from './reducers';



const defaultPosts = [
    { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Koyel Nandi' },
    { title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Koyel Nandi' }
]




export default function App () {  
  
    const [ state, dispatch ] = useReducer(appReducer, { user: '', posts: defaultPosts });
    const { user, posts } = state;

    const [ theme, setTheme ] = useState({
        primaryColor: 'deepskyblue',
        secondaryColor: 'coral'
    })

    useEffect(() => {
        if (user) {
            document.title = `${user} - React Hooks Blog`
        } else {
            document.title = 'React Hooks Blog'
        }
    }, [user]);


   return ( 
    <ThemeContext.Provider value={theme}>       
        <div style={{ padding: 8 }}>

            <Header text="React Hooks Blog created by koyel" />
            <ChangeTheme theme={theme} setTheme={setTheme} />
            <br />
            <UserBar user={user} dispatch={dispatch} />            
            <br />            
            {user && <CreatePost user={user} posts={posts} dispatch={dispatch}/>}         
            <br />            
            <hr />

            <PostList posts={posts} />
        </div>
    </ThemeContext.Provider>
    )
}

