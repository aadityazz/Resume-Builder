import {useState, useEffect, Fragment, useRef} from "react";
import button from "../button";
import { useReactToPrint } from "react-to-print";
import {
    FaLinkedin,
    FaLocationArrow,
    FaPhone,
    FaMailBulk,
    FaWeebly, FaGithub
} from "react-icons/fa";
import { BiLink } from "react-icons/bi";
import "./style.css";
import axios from "axios";

const ResumeComponent = ({ match }) => {
  const [userResumeData, setUserResumeData] = useState({});
  const [mounted, setMounted] = useState(false);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
      content: () => componentRef.current,
  });

  useEffect(() => {
    const fetchedData = async () => {
      await axios
        .get(`https://resume-builder-em31.onrender.com/api/${match.params.id}`)
        .then((res) => {
          if (res.data.success) {
            setMounted(true);
            setUserResumeData(res.data.resumeData);
          }
        });
    };
    fetchedData();
  }, [match.params.id]);

  return (
    <Fragment>
        <div style={{textAlign:"center", marginTop:"30px"}}>
            <button onClick={handlePrint} style={{backgroundColor:"#343a40", padding:"15px", color:"white"}}>Download</button>
        </div>
        <div style={{textAlign:"center", marginTop:"30px"}}>
            Or you can use Link which is saved in Database
        </div>

      {mounted ? (
          <div ref={componentRef} className="resume">
            <div className="resume_left">
              <div className="resume_profile">
              </div>
              <div className="resume_content">
                <div className="resume_item resume_info">
                  <div className="title">
                    <p className="bold">{userResumeData.userFirstName} {userResumeData.userSecondName}
                    </p>
                    <p className="regular">{userResumeData.userProfession}</p>
                  </div>
                  <ul>
                    <li>
                      <div className="icon">
                        <FaLocationArrow className="index"/>
                      </div>
                      <div className="data">
                        {userResumeData.userLocation}
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <FaPhone className="index"/>
                      </div>
                      <div className="data">
                        {userResumeData.userPhoneNumber}
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <FaMailBulk className="index"/>
                      </div>
                      <div className="data">
                        {userResumeData.userEmail}
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <FaWeebly className="index"/>
                      </div>
                      <div className="data">
                        {userResumeData.userPersonalWebsiteLink}
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="resume_item resume_skills">
                  <div className="title">
                    <p className="bold">skill's</p>
                  </div>
                  <ul>
                      <div className="skill_name">
                        <li>{userResumeData.userSkills}</li>
                      </div>
                  </ul>
                </div>
                <div className="resume_item resume_social">
                  <div className="title">
                    <p className="bold">Social</p>
                  </div>
                  <ul>
                    <li>
                        <a
                            href={`https://www.linkedin.com/in/${userResumeData.userLinkedInProfileName}/`}
                        >
                      <div className="icon">
                        <FaLinkedin className="index"/>
                      </div>
                    </a>
                      <div className="data">
                        <p className="semi-bold">LinkedIn</p>
                      </div>
                    </li>
                    <li>
                        <a
                            href={userResumeData.userPersonalWebsiteLink}
                        >
                      <div className="icon">
                          <BiLink className="index"/>
                      </div>
                    </a>
                      <div className="data">
                        <p className="semi-bold">Portfolio</p>
                      </div>
                    </li>
                    <li>
                        <a
                            href={`https://github.com/${userResumeData.userGitHubProfileName}/`}
                        >
                      <div className="icon">
                        <FaGithub className="index"/>
                      </div>
                        </a>
                      <div className="data">
                        <p className="semi-bold">GitHub</p>

                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="resume_right">
              <div className="resume_item resume_about">
                <div className="title">
                  <p className="bold">About Me</p>
                </div>
                <p>{userResumeData.userProfileDescription}</p>
              </div>
              <div className="resume_item resume_work">
                <div className="title">
                  <p className="bold">Work Experience</p>
                </div>
                <ul>
                  <li>
                    <div className="date">{userResumeData.user1stExperienceStartingDate} - {userResumeData.user1stExperienceEndingDate}</div>
                    <div className="info">
                      <p className="semi-bold">{userResumeData.user1stCompanyName}</p>
                      <p>{userResumeData.user1stCompanyExperience}</p>
                    </div>
                  </li>
                  <li>
                    <div className="date">{userResumeData.user2ndExperienceStartingDate} - {userResumeData.user2ndExperienceEndingDate}</div>
                    <div className="info">
                      <p className="semi-bold">{userResumeData.user2ndCompanyName}</p>
                      <p>{userResumeData.user2ndCompanyExperience}</p>
                    </div>
                  </li>
                  <li>
                    <div className="date">{userResumeData.user3rdExperienceStartingDate} - {userResumeData.user3rdExperienceEndingDate}</div>
                    <div className="info">
                      <p className="semi-bold">{userResumeData.user3rdCompanyName}</p>
                      <p>{userResumeData.user3rdCompanyExperience}</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="resume_item resume_education">
                <div className="title">
                  <p className="bold">Education</p>
                </div>
                <ul>
                  <li>
                    <div className="date">{userResumeData.userBachelorStartingDate} - {userResumeData.userBachelorEndingDate}</div>
                    <div className="info">
                      <p className="semi-bold">{userResumeData.userUniversityName}, ({userResumeData.userBachelorDegreeName})</p>
                      <p>{userResumeData.userUniversityExperience}</p>
                    </div>
                  </li>
                </ul>

              </div>
            </div>
          </div>
      ) : (
        "Loading....."
      )}
    </Fragment>
  );
};

export default ResumeComponent;
