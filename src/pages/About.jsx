import React, { useEffect, useState } from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          About Our Organization
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          At CodeSecure, we are dedicated to providing cutting-edge code
          security solutions using the latest advancements in artificial
          intelligence (AI) and machine learning (ML). Our mission is to help
          organizations secure their software applications and protect them from
          cyber threats.
        </p>
        <p className="text-lg text-gray-600 mb-8">
          Our team of experts combines their knowledge in cybersecurity and AI
          to develop innovative tools and technologies that analyze code,
          identify vulnerabilities, and suggest fixes. By leveraging AI, we are
          able to provide faster and more accurate security assessments,
          allowing our clients to mitigate risks and strengthen their defenses
          against cyber attacks.
        </p>
        <p className="text-lg text-gray-600 mb-8">
          Whether you are a small startup or a large enterprise, CodeSecure is
          here to support your security needs. We offer a range of services,
          including code reviews, vulnerability assessments, and secure coding
          training, all designed to help you build and maintain secure software
          applications.
        </p>
        <p className="text-lg text-gray-600 mb-8">
          Partner with CodeSecure today and ensure that your code is secure,
          your applications are protected, and your business is safe from cyber
          threats.
        </p>
      </div>
    </div>
  );
};

export default About;
