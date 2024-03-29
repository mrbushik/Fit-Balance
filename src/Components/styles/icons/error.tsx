import React from "react";

export const Error = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0,0,256,256"
      width="48px"
      height="48px"
      fillRule="nonzero"
    >
      <defs>
        <linearGradient
          x1="7.534"
          y1="7.534"
          x2="27.557"
          y2="27.557"
          gradientUnits="userSpaceOnUse"
          id="color-1"
        >
          <stop offset="0" stopColor="#d22929"></stop>
          <stop offset="0.443" stopColor="#d22929"></stop>
          <stop offset="1" stopColor="#d22929"></stop>
        </linearGradient>
        <linearGradient
          x1="27.373"
          y1="27.373"
          x2="40.507"
          y2="40.507"
          gradientUnits="userSpaceOnUse"
          id="color-2"
        >
          <stop offset="0" stopColor="#d22929"></stop>
          <stop offset="0.179" stopColor="#d22929"></stop>
          <stop offset="0.243" stopColor="#d22929"></stop>
        </linearGradient>
      </defs>
      <g
        fill="none"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
      >
        <g transform="scale(5.33333,5.33333)">
          <path
            d="M42.42,12.401c0.774,-0.774 0.774,-2.028 0,-2.802l-4.019,-4.019c-0.774,-0.774 -2.028,-0.774 -2.802,0l-11.599,11.599l-11.599,-11.599c-0.774,-0.774 -2.028,-0.774 -2.802,0l-4.019,4.019c-0.774,0.774 -0.774,2.028 0,2.802l11.599,11.599l-11.599,11.599c-0.774,0.774 -0.774,2.028 0,2.802l4.019,4.019c0.774,0.774 2.028,0.774 2.802,0z"
            fill="url(#color-1)"
          ></path>
          <path
            d="M24,30.821l11.599,11.599c0.774,0.774 2.028,0.774 2.802,0l4.019,-4.019c0.774,-0.774 0.774,-2.028 0,-2.802l-11.599,-11.599z"
            fill="url(#color-2)"
          ></path>
        </g>
      </g>
    </svg>
  );
};
