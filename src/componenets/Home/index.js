import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';

const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['r','a','n','s','h','u',' ','A','g','r','a','w','a','l']
  const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r','.']
  useEffect(() => {
    return setTimeout (() =>{
      setLetterClass('text-animate-hover')
    }, 6000)
  }, [])
  return (
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>
        <span className={letterClass}>H</span>
        <span className={`${letterClass} _12`}>i,</span>
           <br />
        <span className={`${letterClass} _13`}>I</span>
        <span className={`${letterClass} _14`}>'m</span> 
        <img src={LogoTitle} alt="developer" />
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
        <br />
        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={29}/>
        </h1>
        <h2>
          Full Stack / Figuring things out / Learning Everyday
        </h2>
        <Link to="/contact" className='flat-button'>
        CONTACT ME
        </Link>

      </div>
      <Logo />
    </div>
  );
}

export default Home