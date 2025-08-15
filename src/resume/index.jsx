import React from 'react'
import { AllProjectsWrapper, Awards, Education, FreelancingExperience, Heading, IndustryExperience, Internship, Main, PersonalInfo, ProfessionalSummary, Project, RecentProjectsWrapper, Styled, TechList } from './styled'
import { IoCall } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { FaGithub, FaGlobe, FaLink, FaLinkedin } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

const Resume = () => {
    const RESUME_URL = "https://github.com/a2rp/resume/releases/latest/download/Ashish_Ranjan_Resume.pdf";
    const handleDownload = () => window.open(RESUME_URL, "_blank", "noopener");

    return (
        <>
            <Styled.Wrapper>
                {/* <Styled.DownloadResume
                    onClick={handleDownload}
                    className='downloadResumeButton'
                >Download Resume</Styled.DownloadResume> */}
                <Styled.TopSection>
                    <Styled.LeftCol>
                        <h1 className='name'>Ashish Ranjan</h1>
                        <h3 className='profession'>Full-Stack Developer (React • Node.js)</h3>
                        <div className='githubLinkedin'>
                            <a className='github' href="https://github.com/a2rp" target='_blank'>
                                <FaGithub /> https://github.com/a2rp
                            </a>
                            <a className='linkedin' href="https://linkedin.com/in/aashishranjan" target='_blank'>
                                <FaLinkedin /> https://linkedin.com/in/aashishranjan
                            </a>
                        </div>
                    </Styled.LeftCol>

                    <Styled.RightCol>
                        <PersonalInfo>
                            <div className='content'>
                                <ul>
                                    <li>
                                        <IoCall className='icon' /> <div>+91-8123747965</div>
                                    </li>
                                    <li>
                                        <MdEmail className='icon' /> <div>ash.ranjan09@gmail.com</div>
                                    </li>
                                    <li>
                                        <FaGlobe className='icon' />
                                        <div className='websiteLinks'>
                                            <a href="https://www.ashishranjan.net" target='_blank'>https://www.ashishranjan.net</a>
                                            {/* ,
                                        <br /> <a href="http://www.ashishranjan.in" target='_blank'>ashishranjan.in</a> */}
                                        </div>
                                    </li>
                                    <li>
                                        <FaLocationDot className='icon' />
                                        <div>Bengaluru, India</div>
                                    </li>
                                </ul>
                            </div>
                        </PersonalInfo>
                    </Styled.RightCol>
                </Styled.TopSection>

                {/* <div style={{ borderTop: "1px solid #000" }} /> */}
                <Main>
                    <div className='col1'>
                        <section>
                            <Heading>TECHNICAL SKILLS</Heading>
                            <TechList>
                                <li>Android</li>
                                <li>Angular</li>
                                <li>Apache Derby</li>
                                <li>ASP.NET</li>
                                <li>AWS</li>
                                <li>C/C++</li>
                                <li>CSS</li>
                                <li>Chakra UI</li>
                                <li>CodeIgniter</li>
                                <li>Docker</li>
                                <li>DataTables</li>
                                <li>Express.js</li>
                                <li>FastAPI</li>
                                <li>Firebase</li>
                                <li>Firestore</li>
                                <li>HTML</li>
                                <li>Java</li>
                                <li>JavaScript</li>
                                <li>Laravel</li>
                                <li>Linux</li>
                                <li>Material UI</li>
                                <li>MongoDB</li>
                                <li>Microsoft SQL Server</li>
                                <li>Nest.js</li>
                                <li>Node.js</li>
                                <li>Oracle</li>
                                <li>PHP</li>
                                <li>PostgreSQL</li>
                                <li>Python</li>
                                <li>React</li>
                                <li>Spring Boot</li>
                                <li>Sass</li>
                            </TechList>
                        </section>

                        <section>
                            <Heading>AWARDS</Heading>
                            <Awards>
                                <div className='name'>IBM India Code Rally Challenge</div>
                                <div className='type'>Online AI Race Coding Competition</div>
                                <div className='date'>Date: <b>August, 2015</b></div>
                                <div className='position'>Position: <b>1st Rank</b></div>
                            </Awards>
                        </section>

                        <section>
                            <Heading>INTERNSHIP</Heading>
                            <Internship>
                                <div className='name'>Tata Hispano Motors Carrocera</div>
                                <div className='type'>ASP.NET Web Portal</div>
                                <div className='date'>Date: <b>Jan–Apr 2013</b></div>
                                <div className='location'>Location: <b>Jamshedpur, India</b></div>
                            </Internship>
                        </section>

                        <section>
                            <Heading>EDUCATION</Heading>
                            <Education>
                                <ul>
                                    <li>
                                        <div className='name'>
                                            <b>Post Graduation</b> <span>2013</span>
                                        </div>
                                        <div className='degree'>
                                            <b>MCA</b> <span>76.8%</span>
                                        </div>
                                        <div className='location'>
                                            BIT Mesra, Ranchi, India
                                        </div>
                                    </li>
                                    <li>
                                        <div className='name'>
                                            <b>Graduation</b> <span>2010</span>
                                        </div>
                                        <div className='degree'>
                                            <b>BCA</b> <span>74.3%</span>
                                        </div>
                                        <div className='location'>
                                            BIT Mesra, Ranchi, India
                                        </div>
                                    </li>
                                    <li>
                                        <div className='name'>
                                            <b>Intermediate</b> <span>2004</span>
                                        </div>
                                        <div className='degree'>
                                            <b>12th</b> <span>71.2%</span>
                                        </div>
                                        <div className='location'>
                                            BRL DAV Public School, Bhandaridah, Bokaro, India
                                        </div>
                                    </li>
                                    <li>
                                        <div className='name'>
                                            <b>Matric</b> <span>2002</span>
                                        </div>
                                        <div className='degree'>
                                            <b>10th</b> <span>77.8%</span>
                                        </div>
                                        <div className='location'>
                                            BRL DAV Public School, Bhandaridah, Bokaro, India
                                        </div>
                                    </li>
                                </ul>
                            </Education>
                        </section>
                    </div>

                    <div className='col2'>
                        <section>
                            <Heading>PROFESSIONAL SUMMARY</Heading>
                            <ProfessionalSummary>
                                Full-stack developer (React • Node.js) who ships fast, stable, SEO-friendly apps with payments & CI/CD—focused on measurable performance and clean, maintainable code.
                                <br /><br />
                            </ProfessionalSummary>
                        </section>

                        {/* industry experiecne */}
                        <section>
                            <Heading>INDUSTRY EXPERIENCE</Heading>
                            <IndustryExperience>
                                <div className='nameTenure'>
                                    <h4 className='subheading'>ABIR Networks Private Limited</h4>
                                    <span>May 2024 – May 2025</span>
                                </div>
                                <ul>
                                    <li>
                                        <b>Position:</b> Senior Developer
                                    </li>
                                    <li>
                                        <b>Tech stack:</b> React, Node.js
                                    </li>
                                    <li>
                                        <b>Highlights:</b>
                                        <div className='tasksDetail'>
                                            <ul>
                                                <li>
                                                    <a href="https://abirnetworks.com/" target='_blank'>https://abirnetworks.com/</a> <span>Entire site (React, Node).</span>
                                                </li>
                                                <li>
                                                    <a href="https://pentestgenix.com/" target='_blank'>https://pentestgenix.com/</a> <span>All public pages (React, Node).</span>
                                                </li>
                                                <li><a href="https://karate-premier-league.netlify.app/" target="_blank">https://karate-premier-league.netlify.app/</a> <span>Full event MERN app. (React, Node).</span></li>
                                                <li>meducate.ai <span>Group pages (React)</span></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </IndustryExperience>

                            <IndustryExperience>
                                <div className='nameTenure'>
                                    <h4 className='subheading'>Modern Identity Private Limited</h4>
                                    <span>July 2022 – May 2023</span>
                                </div>
                                <ul>
                                    <li>
                                        <b>Position:</b> Web Application Developer
                                    </li>
                                    <li>
                                        <b>Tech stack:</b> Node.js, React, Firestore, Firebase Functions, MongoDB
                                    </li>
                                    <li>
                                        <b>Highlights:</b>
                                        <div className='tasksDetail'>
                                            <ul>
                                                <li>Admin Panel</li>
                                                <li>User Management System</li>
                                                <li>Online Payment System with Stripe and Razorpay</li>
                                                {/* <li>and more.</li> */}
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </IndustryExperience>

                            <IndustryExperience>
                                <div className='nameTenure'>
                                    <h4 className='subheading'>Tech Active Solutions India Pvt. Ltd</h4>
                                    <span>October 2021 – June 2022</span>
                                </div>
                                <ul>
                                    <li>
                                        <b>Position:</b> Junior Software Developer
                                    </li>
                                    <li>
                                        <b>Tech stack:</b> PHP, MySQL, CodeIgniter, Python, FastAPI, React, Node.js, MongoDB
                                    </li>
                                    <li>
                                        <b>Highlights:</b>
                                        <div className='tasksDetail'>
                                            <ul>
                                                <li>Text Chat System</li>
                                                <li>User Profile Management System</li>
                                                <li>Display MySQL Data With DataTables</li>
                                                <li>Payment System with Stripe.</li>
                                                {/* <li>and more.</li> */}
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </IndustryExperience>
                        </section>

                        {/* freelancing experience */}
                        <section>
                            <Heading
                                style={{
                                    marginTop: "15px"
                                }}
                            >FREELANCING EXPERIENCE</Heading>
                            <FreelancingExperience>
                                <div className='tenure'>
                                    <b>Tenure:</b> June 2023 – May 2024,  January 2014 – April 2020
                                </div>
                                <div className='techStack'>
                                    <b>Tech stack:</b> React, Node.js, MongoDB... (full list in Skills)
                                </div>
                                <div className='projects'>
                                    <b>Projects:</b>
                                    <div>
                                        <ul>
                                            <li>
                                                <b>Clients:</b> restaurants, clinics, coaching, NGOs, schools, tuition, cafés, retail
                                            </li>
                                            <li>
                                                <b>Work:</b> QR ordering, admissions, appointments, donations, POS, sites, bookings, simple e-comm, inventory, forms/CSV
                                            </li>
                                            <li>
                                                <b>Stack:</b> React, Node, MongoDB, Razorpay/Stripe, PHP (CI), MySQL, jQuery... (see full list in Skills)
                                            </li>
                                            <li>
                                                <b>Links:</b> <a href="http://www.ashishranjan.net/projects" target="_blank">
                                                    http://www.ashishranjan.net/projects
                                                </a> - <a href="https://github.com/a2rp">https://github.com/a2rp</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </FreelancingExperience>
                        </section>

                        <section>
                            <Heading className='allProjects'>
                                <span>
                                    ALL PROJECTS
                                </span>
                                <a href="https://github.com/a2rp" target='_blank'>
                                    <FaLink /> https://github.com/a2rp
                                </a>
                            </Heading>

                            <AllProjectsWrapper>
                                {/* <p>I have also worked on many personal, client, and experimental projects during my freelancing journey. Explore all of them on my <a href="https://github.com/a2rp" target='_blank'>
                                    GitHub
                                </a>.
                                    <br />
                                    <small>Earlier projects (archive): <a href="http://www.ashishranjan.in" target="_blank" rel="noopener noreferrer">http://www.ashishranjan.in</a></small>
                                </p> */}
                                <ul>
                                    <li>
                                        All my personal, client, and experimental work lives on <a href="https://github.com/a2rp" target='_blank'>GitHub/a2rp.</a>
                                    </li>
                                    <li>Older work archive: <a href="http://www.ashishranjan.in" target='_blank'>http://www.ashishranjan.in</a>.</li>
                                </ul>
                            </AllProjectsWrapper>
                        </section>
                    </div>
                </Main>
            </Styled.Wrapper>
        </>
    )
}

export default Resume

