import { useState, useEffect } from 'react';

const useAuthentication = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setUser({ id: 1, username: 'exampleUser' });
            setIsLoading(false);
        }, 1000);
    }, []);

    const login = (username, password) => {
        setIsLoading(true);
        setTimeout(() => {
            setUser({ id: 1, username: username });
            setIsLoading(false);
        }, 1000);
    };

    const logout = () => {
        setUser(null);
    };

    return { user, isLoading, login, logout };
};

export default useAuthentication;
