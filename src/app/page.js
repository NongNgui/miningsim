import './App.css'; // Import the CSS file for styling
import React from 'react'; 
import Image from 'next/image';

export default function Home() {
  return (
    <div className="centered-container">
      <Image
        src="/images/minecraft_title.png" // ใช้เส้นทางที่ถูกต้อง
        alt="Minecraft Logo"
        width={512}
        height={512}
        priority
      />
      
      <div className="button-container">
        <a href="minecraft://?addExternalServer=MiningSim|pm2.mc4.in:21143">
          <button className="big-button">Added Server</button>
        </a>
      </div>

      <div className="button-container">
        <a href="minecraft://connect?serverUrl=pm2.mc4.in&serverPort=21143">
          <button className="big-button">Connect to Server</button>
        </a>
      </div>
    </div>
  );
}
