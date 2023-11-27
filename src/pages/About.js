// AboutUsPage.js

import React from "react";
import { Link } from "react-router-dom";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";

export default function About() {
  return (
    <div className="bg-gray-100 font-sans">
      <header className="bg-slate-500 text-white text-center py-10">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p>Our Team and Mission</p>
      </header>

      <section className="container mx-auto mt-8 p-8 bg-white shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-700">
              Real estate websites aim to simplify the process of selling or
              renting properties by providing a centralized platform where users
              can access comprehensive information
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              Your real estate website is an important marketing channel for
              attracting inbound leads for clients, persuading word-of-mouth
              referrals to commit, and distributing your listings
            </p>
          </div>
        </div>
      </section>
  
      <section className="container mx-auto mt-8 p-8 bg-white shadow-md">
      <h1 className="text-lg font-bold text-center">Our Team </h1>
        <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex item-center justify-center">

          {/* Team Member 1 */}
          <div className="team-member">
            <img
              src={team2}
              alt="Team Member 1"
              className="rounded-full mb-4 h-48"
            />
            <h3 className="text-lg font-bold text-center">Sakshi </h3>
            <p className="text-gray-700 text-center">Team Leader</p>
          </div>

          {/* Team Member 2 */}
          <div className="team-member">
          
            <img
              src={team1}
              alt="Team Member 2"
              className="rounded-full mb-4 h-48"
            />
            <h3 className="text-lg font-bold text-center">Badal Kamble</h3>
            <p className="text-gray-700 text-center">Team Member</p>
     
       
          </div>
          {/* Team Member 2 */}
          <div className="team-member">
          
            <img
              src={team3}
              alt="Team Member 2"
              className="rounded-full mb-4 h-48"
            />
            <h3 className="text-lg font-bold text-center">Aditi</h3>
            <p className="text-gray-700 text-center">Team Member</p>
     
       
          </div>
         

          {/* Add more team members as needed */}
        </div>
      </section>
    </div>
  );
}
