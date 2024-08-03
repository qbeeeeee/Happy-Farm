import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SuccessPage = () => {
    const location = useLocation();

    useEffect(()=>{
        const queryParams = new URLSearchParams(location.search);
        const sessionId = queryParams.get('session_id');

        if (sessionId) {
            fetch(`http://localhost:4000/retrieve-session?session_id=${sessionId}`)
            .then((response)=>response.json())
            .then(data => {
                console.log('Session:', data.session);
                console.log('Customer:', data.customer);
            })
            .catch(error => {
                console.error('Error fetching session details:', error);
            });

        }
    },[location.search]);

    return (
        <div>
            <h1>Payment Successful!</h1>
            <p>Thank you for your purchase.</p>
        </div>
    );
};

export default SuccessPage;
