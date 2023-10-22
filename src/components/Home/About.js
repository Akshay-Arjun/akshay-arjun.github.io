import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub'
import instagram  from '../../data/instagram.svg';
import twitter from '../../data/twitter.svg'
const About = (props) => {
return (
<>
  <div style={{ alignContent:'space-evenly' }}>
  <h2 style={{ textAlign: "center" }}>
    Hi there{" "}
    <span role="img" aria-label="Waving hand">
      👋
    </span>
    , I'm 4k5h4y 4rjun{" "}
    <img
      src="https://media.giphy.com/media/mGcNjsfWAjY5AEZNw6/giphy.gif"
      width="50"
      alt="An animation of a character waving"
    />
  </h2>
  <h3 style={{ textAlign: "center" }}>
    Doing my B.Tech in Computer Science (Cybersecurity) at SR University,
    India
  </h3>
  <br />
  <ul style={{textAlign: 'left',alignContent:'space-evenly',paddingRight: '20px'}}>
    
    <li>
      
      🔭 My Top Projects
    {" "}
      <a
        href="https://abort-india.vercel.app"
        style={{ color: "#1DA1F2" }}
      >
        A website for abortion in India
      </a>{" "}
,{" "}<a href="https://akshay-blog.vercel.app" style={{ color: "#1DA1F2" }}>
        My personal blog 
      </a>{" "}
      and{" "}
      <a href="https://akshay-arjun.vercel.app" style={{ color: "#1DA1F2" }}>
        My personal website
      </a>
      .
    </li>
    <li>💬 View all my projects, <a href="https://akshay-arjun.vercel.app/projects" style={{ color: "#1DA1F2" }}>   
    <li>🌱 I’m a Web developer and Ethical Hacker.
    <li>💬 Talk to me about Cybersecurity, <a href="https://voiceformenindia.com/" style={{ color: "#1DA1F2" }}>
    Gender biased laws.
      </a></li>
    <li>
      🎮 Games I play Valorant,{" "}
      <a
        href="https://app.hackthebox.com/profile/425207"
        style={{ color: "#1DA1F2" }}
      >
        Capture the flag
      </a>
      .
    </li>
    <li>
      📫 How to reach me{" "}
      <a href="/Contact" style={{ color: "#1DA1F2" }}>
        My links
      </a>
      .
    </li>
    <li>
      ⚡ Unfunny fact: India doesn't have Men rights & Gender neutral laws.
    </li>
    <li>
      📖 I read a lot of Blogs on Hacking & Hindu <del>mythology</del> history.
    </li>
    <li>
      🐍 Favourite programming language is{" "}
      <a
        href="https://imgs.xkcd.com/comics/python.png"
        style={{ color: "#1DA1F2" }}
      >
        Python
      </a>
      .
    </li>
  </ul>

  <br />
  <h3 style={{ textAlign: "left" }}>Connect with me:</h3>
    <p align="left">
      <a href="https://twitter.com/AkshayVollala"  style={{color: '#1DA1F2'}} target="blank"><img style={{ textAlign: "center" }} src={twitter} alt="x4k5h4yx" height="30" width="40" /></a>
      <a href="https://instagram.com/akshayarjun_"  style={{color: '#1DA1F2'}} target="blank"><img style={{ textAlign: "center" }} src={instagram} alt="_thearjun_" height="30" width="40" /></a>
      <a href="https://www.linkedin.com/in/akshayvollala/"  style={{color: '#1DA1F2'}} target="blank"><img style={{ textAlign: "center" }} src="https://www.svgrepo.com/show/157006/linkedin.svg" alt="_thearjun_" height="30" width="40" /></a>   
      <a href="https://github.com/Akshay-Arjun"  style={{color: '#1DA1F2'}} target="blank">{<GitHubIcon sx={{ fontSize: 35 }} />}</a>   
    </p>
    
<h3 style={{ textAlign: "left" }}>Download Resume : </h3>
  <a href="https://github.com/Akshay-Arjun/Akshay-Arjun/raw/main/Akshay%20%20Vollala's%20Resume.pdf"  style={{color: '#1DA1F2', height:"30" ,width:"40"}} target="blank"><img style={{ textAlign: "center" }} src="https://img.shields.io/badge/Resume-100000?style=for-the-badge&logo=readme&logoColor=white" alt="_thearjun_"  /></a>  


    </div>
</>
  )
};

export default About;
