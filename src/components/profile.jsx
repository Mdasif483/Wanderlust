import React from "react";
import PropTypes from "prop-types";
import { FaLinkedin, FaGithub, FaTwitter, FaGlobe, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contextapi/authcontext/authContext";

const Profile = ({
  
  socialLinks = {
    linkedin: "https://www.linkedin.com/in/mohd-asif-094447331",
    github: "https://github.com/Mdasif483",
    FaFacebookF: "https://www.facebook.com/profile.php?id=100070948954438&mibextid=ZbWKwL",
    FaInstagram: "https://www.instagram.com/making11996?igsh=MTN4YzQ3NHh2cDYxcQ=="
  }
}) => {
  const {user} = useAuthContext();

  const avatarUrl = user?.avatar  || "https://images.unsplash.com/photo-1633332755192-727a05c4013d"
  const name =  user?.name || "i am king"
  const email = user?.email || "king@gmail.com"
  const password = user?.password || "king1234"
  const handleImageError = (e) => {
        e.target.src = "https://images.unsplash.com/photo-1511367461989-f85a21fda167";
    };


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full transform transition-all duration-300 hover:shadow-2xl relative overflow-hidden">
        <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 w-32 h-32 bg-blue-100 rounded-full opacity-50"></div>
        <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 w-32 h-32 bg-green-100 rounded-full opacity-50"></div>
        
        <div className="flex flex-col items-center relative z-10">
          <div className="relative group">
            <img
              src={avatarUrl}
              alt={`${name}'s profile picture`}
              onError={handleImageError}
              className="w-32 h-32 rounded-full border-4 border-blue-100 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <h1 className="mt-6 text-2xl font-bold text-gray-800 capitalize">{name}</h1>
          <p className="mt-2 text-lg text-gray-600 italic capitalize">{email}</p>

          <div className="mt-4 text-center">
            <p className="text-gray-600 max-w-xs line-clamp-3">{password}</p>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 text-gray-600 hover:text-blue-600 transition-colors duration-300 rounded-full hover:bg-blue-50"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 text-gray-600 hover:text-gray-900 transition-colors duration-300 rounded-full hover:bg-gray-50"
            >
              <FaGithub size={24} />
            </a>
            <a
              href={socialLinks.FaFacebookF}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
              className="p-3 text-gray-600 hover:text-blue-400 transition-colors duration-300 rounded-full hover:bg-blue-50"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href={socialLinks.FaInstagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Personal Website"
              className="p-3 text-gray-600 hover:text-pink-500 transition-colors duration-300 rounded-full hover:bg-green-50"
            >
              <FaInstagram size={24} />
            </a>
          </div>

          <Link to="/contact">
          <button
            className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" >
            Contact Me
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
  designation: PropTypes.string,
  bio: PropTypes.string,
  socialLinks: PropTypes.shape({
    linkedin: PropTypes.string,
    github: PropTypes.string,
    twitter: PropTypes.string,
    website: PropTypes.string
  })
};

export default Profile;
