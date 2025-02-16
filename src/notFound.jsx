import { React, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Countdown from 'react-countdown';

function PageNotFound() {
    const navigate = useNavigate();

    useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer); // Cleanup kalau komponen unmount
    }, [navigate]);

  return (
    <div className='main'>
        <Countdown date={Date.now() + 4000} />
        <img src='/404.jpeg' 
        alt='sakiko 404'
        style={{margin: 'auto'}}
        />
        <div>404</div>
        <br />
        kamu sepertinya nyasar?
        <br />
        aku balikin ke home 
    </div>
  )
}

export default PageNotFound;