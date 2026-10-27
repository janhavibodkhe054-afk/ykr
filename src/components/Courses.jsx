import React from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Mic2,
  MessagesSquare,
  PersonStanding,
  Sparkles,
  UserRoundCheck,
  TrendingUp,
  Landmark,
} from "lucide-react";

import "./Courses.css";

const courses = [
  {
    id: "01",
    title: "Business English for Professionals",
    highlight: "PROFESSIONAL · IMPACT",
    image: "/train1.jpg",
    description:
      "Your ideas deserve to be heard. Communicate clearly in meetings, write effective emails, and create a strong professional impression in the workplace.",
  },
  {
    id: "02",
    title: "Public Speaking & Stage Confidence",
    highlight: "COURAGE · EXPRESSION",
    image: "/train2.png",
    description:
      "Stop letting the fear of judgment silence your voice. Overcome nervousness, command attention, and speak confidently in front of any audience.",
  },
  {
    id: "03",
    title: "Communication Skills",
    highlight: "CONNECTION · CLARITY",
    image: "/train3.jpg",
    description:
      "Being understood changes everything. Express your thoughts clearly, listen with empathy, and build stronger personal and professional relationships.",
  },
  {
    id: "04",
    title: "Body Language & Presence",
    highlight: "PRESENCE · CONFIDENCE",
    image: "/train4.jpg",
    description:
      "Before you speak, your body sends a message. Master posture, gestures, eye contact, and facial expressions to communicate confidence and make a positive first impression.",
  },
  {
    id: "05",
    title: "Personality Development",
    highlight: "GROWTH · SELF-CONFIDENCE",
    image: "/train5.jpg",
    description:
      "Discover your strengths and unlock your potential. Build self-confidence, improve interpersonal skills, and become a stronger, more confident version of yourself.",
  },
  {
    id: "06",
    title: "Interview & Career Readiness",
    highlight: "CAREER · OPPORTUNITY",
    image: "/train6.jpg",
    description:
      "Your skills deserve the right opportunity. Overcome interview anxiety, present your strengths effectively, and make a confident impression on potential employers.",
  },
  {
    id: "07",
    title: "Corporate Sales & Motivation Training",
    highlight: "SALES · LEADERSHIP",
    image: "/train7.jpg",
    description:
      "Sales success begins with understanding people. Build trust, handle objections, influence decisions ethically, and convert conversations into business opportunities using the SPANCO model.",
  },
  {
    id: "08",
    title: "Political Leadership Development",
    highlight: "LEADERSHIP · PUBLIC IMPACT",
    image: "/train8.jpg",
    description:
      "Leadership begins with the courage to stand up and the ability to inspire others. Build public speaking confidence, develop leadership qualities, master body language, communicate effectively with citizens, and present your vision with clarity, credibility, and impact.",
  },
];

export default function Courses() {
  return (
    <section className="ykr-courses" id="courses">
      <div className="ykr-courses-container">
        {/* SECTION HEADING */}

        <div className="ykr-courses-heading">
          <div>
            <span className="ykr-courses-eyebrow">OUR TRAINING PROGRAMS</span>

            <h2>
              Develop Skills That
              <span> Make a Difference.</span>
            </h2>
          </div>

          <p>
            Explore practical training programs designed to strengthen your
            communication, confidence, professional skills and leadership
            abilities.
          </p>
        </div>

        {/* TWO COLUMN COURSES */}

        <div className="ykr-courses-grid">
          {courses.map((course) => {
            const whatsappUrl =
              "https://wa.me/917218550652?text=" +
              encodeURIComponent(
                `Hello YKR Training Institute, I would like to enquire about ${course.title}.`,
              );

            return (
              <article className="ykr-course-card" key={course.id}>
                {/* COURSE IMAGE */}

                <div className="ykr-course-image">
                  <img src={course.image} alt={course.title} loading="lazy" />

                  <span className="ykr-course-image-number">{course.id}</span>
                </div>

                {/* COURSE CONTENT */}

                <div className="ykr-course-content">
                  <h3>
                    {course.id}. {course.title}
                  </h3>

                  <span className="ykr-course-highlight">
                    {course.highlight}
                  </span>

                  <p className="ykr-course-description">{course.description}</p>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ykr-course-link"
                  >
                    Enquire Now
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* BOTTOM CTA */}

        <div className="ykr-courses-bottom">
          <p>
            Not sure which program is right for you?
            <strong> Our team is here to guide you.</strong>
          </p>

          <a
            href="https://wa.me/917218550652?text=Hello%2C%20please%20help%20me%20choose%20the%20right%20training%20program."
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Course Guidance
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
