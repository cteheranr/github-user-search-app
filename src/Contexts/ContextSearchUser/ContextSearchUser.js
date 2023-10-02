import React from "react";

const ContextSearchUser = React.createContext();

function SearchUserProvider({ children }){
    const [ data, setData ] = React.useState([]);
    const [ inputValue, SetInputValue ] = React.useState('');

    React.useEffect(() => {
        getUser('octocat');
    },[]);

    const getUser = async (username) =>{
        console.log('user', username);
        const response = await fetch(`https://api.github.com/users/${username}`);
        console.log('response', response.status);
        const dataUser = await response.json();
        if( response.status === 200){
            setData(dataUser);
        }else{        
            console.log('Valio la peticion verga');
        }
    }

    return (
        <ContextSearchUser.Provider value={{ data, getUser, inputValue, SetInputValue }}>
            {children}
        </ContextSearchUser.Provider>
    )

}

export { ContextSearchUser, SearchUserProvider };