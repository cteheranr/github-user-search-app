import React from "react";

const ContextSearchUser = React.createContext();

function SearchUserProvider({ children }){
    const [ data, setData ] = React.useState([]);
    const [ inputValue, SetInputValue ] = React.useState('');

    React.useEffect(() => {
        getUser('octocat');
    },[]);

    const getUser = async (username) =>{
        const response = await fetch(`https://api.github.com/users/${username}`);
        const dataUser = await response.json();
        if( response.status === 200){
            setData(dataUser);
        }else{        
            console.log('Verifica la petición');
        }
    }

    return (
        <ContextSearchUser.Provider value={{ data, getUser, inputValue, SetInputValue }}>
            {children}
        </ContextSearchUser.Provider>
    )

}

export { ContextSearchUser, SearchUserProvider };
