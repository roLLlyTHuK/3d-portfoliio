import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Andrii</span> 👏
            <br />
            A Fullstack Developer based in Ukraine.
        </h1>
    ),
    2: (
        <InfoBox
            text='I am currently working as a self-employed fullstack developer'
            link='/about'
            btnText='About me'
        />
    ),
    3: (
        <InfoBox
            text='Take a look at the projects I`ve developed myself or participated in developing '
            link='/projects'
            btnText='Visit my portfolio'
        />
    ),
    4: (
        <InfoBox
            text='Get in touch with me if you have any questions'
            link='/contact'
            btnText='Let`s talk'
        />
    )
}

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null
}

export default HomeInfo