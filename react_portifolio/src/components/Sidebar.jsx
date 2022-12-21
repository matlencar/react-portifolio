import React from 'react';
import Avatar from '../img/eu.jpg';
import '../styles/components/sidebar.sass';
import InformationContainer from './InformationContainer';
import SocialNetwork from './SocialNetwork';

const Sidebar = () => {

    return (
        <aside id='sidebar'>
            <img src={Avatar} alt="Matheus Alencar" />
            <p className="title">Desenvolvedor</p>
            <SocialNetwork />
            <InformationContainer/>
            <a href="" className='btn-download'>Download Curriculo</a>
        </aside>
    );
}

export default Sidebar;