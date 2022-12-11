import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub'

const About = (props) => {
return (
<>
  <div style={{ textAlign: 'justify' }}>
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
  <ul style={{ textAlign: 'justify'}} >
    
    <li>
      
      🔭 I’m currently working on{" "}
      <a
        href="https://thereisnoearthb.org"
        style={{ color: "#1DA1F2" }}
      >
        There is no earth b website
      </a>{" "}
      and{" "}
      <a href="https://akshay-arjun.vercel.app" style={{ color: "#1DA1F2" }}>
        My personal website
      </a>
      .
    </li>
    <li>🌱 I’m currently learning Web development and Ethical Hacking.</li>
    <li>💬 Talk to me about Cybersecurity,Gender biased laws.</li>
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
      <a href="https://bit.ly/AKSHAYARJUN" style={{ color: "#1DA1F2" }}>
        My links
      </a>
      .
    </li>
    <li>
      ⚡ Unfunny fact: India doesn't have Men rights & Gender neutral laws.
    </li>
    <li>
      📖 I read a lot of Blogs on Hacking & Hindu <del>mythology</del>history.
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
      <a href="https://twitter.com/x4k5h4yx"  style={{color: '#1DA1F2'}} target="blank"><img style={{ textAlign: "center" }} src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="x4k5h4yx" height="30" width="40" /></a>
      <a href="https://instagram.com/_thearjun_"  style={{color: '#1DA1F2'}} target="blank"><img style={{ textAlign: "center" }} src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="_thearjun_" height="30" width="40" /></a>
      <a href="https://www.linkedin.com/in/akshayvollala/"  style={{color: '#1DA1F2'}} target="blank"><img style={{ textAlign: "center" }} src="https://www.svgrepo.com/show/157006/linkedin.svg" alt="_thearjun_" height="30" width="40" /></a>   
      <a href="https://github.com/Akshay-Arjun"  style={{color: '#1DA1F2'}} target="blank">{<GitHubIcon sx={{ fontSize: 35 }} />}</a>   
    </p>
    

    </div>
</>
  )
};

export default About;
