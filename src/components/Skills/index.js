import React from 'react';
import './languages.css';
import LanguagesList from './LanguagesList';
import Python from '../../data/python.svg';
import react from '../../data/react.svg';
import github from '../../data/github.svg';
import html from '../../data/html5.svg';
import javascript from '../../data/java-script.svg';
import linux from '../../data/linux.svg';
import java from '../../data/java.svg';
import css from '../../data/css.svg';
const Languages = () => (

   <div className="stacks">
        <h2>Skills:</h2>
        <div className="stacks__wrap">
            <LanguagesList
                stackName="React"
                score="80"
                imgLink={react} />
            <LanguagesList
                stackName="Git"
                score="100"
                imgLink={github} />
            <LanguagesList
                stackName="Html"
                score="100"
                imgLink={html} />
            <LanguagesList
                stackName="Javascript"
                score="100"
                imgLink={javascript} />
            <LanguagesList
                stackName="Linux"
                score="100"
                imgLink={linux} />
            <LanguagesList
                stackName="Python"
                score="70"
                imgLink={Python} />
            <LanguagesList
                stackName="C"
                score="90"
                imgLink="https://cdn.iconscout.com/icon/free/png-512/c-programming-569564.png" />
            <LanguagesList
                stackName="Java"
                score="60"
                imgLink={java} />
            <LanguagesList
                stackName="CSS"
                score="100"
                imgLink={css} />
                     </div>
    </div>

);

export default Languages;