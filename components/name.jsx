import React, {useEffect}  from 'react';
import Typed from 'typed.js';

export default function Name(){
    const lo = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(lo.current, {
          strings: ['Network Engineer', 'SysAdmin', 'Graphic Designer'],
          backSpeed: 20,
          typeSpeed: 40,
          loop: true,
        });
    
        return () => {
          typed.destroy();
        };
      }, []);

    return (
        <>
            <span className='font-medium' ref={lo}></span>
        </>
    );
}