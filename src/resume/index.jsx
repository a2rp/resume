import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { IoCall } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { FaGithub, FaGlobe, FaLinkedin } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

const githubReposUrl = 'https://api.github.com/users/a2rp/repos?type=owner&sort=pushed&direction=desc&per_page=100'

const formatUpdatedDate = (date) => new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
}).format(new Date(date))

const formatResumeDate = (date) => new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
}).format(date)

const Resume = () => {
    const [resumeDate] = useState(() => new Date())
    const [recentProjects, setRecentProjects] = useState([])
    const [projectsLoaded, setProjectsLoaded] = useState(false)
    const [projectsFailed, setProjectsFailed] = useState(false)

    useEffect(() => {
        const controller = new AbortController()

        const loadRecentProjects = async () => {
            try {
                const response = await fetch(githubReposUrl, {
                    headers: { Accept: 'application/vnd.github+json' },
                    signal: controller.signal,
                })

                if (!response.ok) throw new Error('GitHub project list request failed')

                const repositories = await response.json()
                const projects = repositories
                    .filter((repository) => (
                        !repository.fork
                        && repository.name.toLowerCase() !== 'resume'
                        && repository.name.toLowerCase() !== 'a2rp'
                        && repository.description
                    ))
                    .slice(0, 3)

                setRecentProjects(projects)
            } catch (error) {
                if (error.name !== 'AbortError') setProjectsFailed(true)
            } finally {
                if (!controller.signal.aborted) setProjectsLoaded(true)
            }
        }

        loadRecentProjects()

        return () => controller.abort()
    }, [])

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.topSection}>
                    <div className={styles.leftCol}>
                        <h1 className={styles.resumeName}>Ashish Ranjan</h1>
                        <h3 className={styles.profession}>Full-Stack Developer (React • Node.js)</h3>
                        <div className={styles.githubLinkedin}>
                            <a className={styles.socialLink} href="https://github.com/a2rp" target='_blank' rel='noopener noreferrer'>
                                <FaGithub /> https://github.com/a2rp
                            </a>
                            <a className={styles.socialLink} href="https://linkedin.com/in/aashishranjan" target='_blank' rel='noopener noreferrer'>
                                <FaLinkedin /> https://linkedin.com/in/aashishranjan
                            </a>
                        </div>
                    </div>

                    <div className={styles.rightCol}>
                        <div className={styles.personalInfo}>
                            <div className={styles.personalInfoContent}>
                                <ul>
                                    <li>
                                        <IoCall className={styles.icon} /> <div>+91-8123747965</div>
                                    </li>
                                    <li>
                                        <MdEmail className={styles.icon} /> <div>ash.ranjan09@gmail.com</div>
                                    </li>
                                    <li>
                                        <FaGlobe className={styles.icon} />
                                        <div className={styles.websiteLinks}>
                                            <a href="https://www.ashishranjan.net" target='_blank' rel='noopener noreferrer'>https://www.ashishranjan.net</a>
                                            {/* ,
                                        <br /> <a href="http://www.ashishranjan.in" target='_blank' rel='noopener noreferrer'>ashishranjan.in</a> */}
                                        </div>
                                    </li>
                                    <li>
                                        <FaLocationDot className={styles.icon} />
                                        <div>Bengaluru, India</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div style={{ borderTop: "1px solid #000" }} /> */}
                <div className={styles.main}>
                    <div className={styles.col1}>
                        <section>
                            <h3 className={styles.heading}>TECHNICAL SKILLS</h3>
                            <ul className={styles.techList}>
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
                            </ul>
                        </section>

                        <section>
                            <h3 className={styles.heading}>AWARDS</h3>
                            <div className={styles.awards}>
                                <div className={styles.itemName}>IBM India Code Rally Challenge</div>
                                <div className={styles.itemType}>Online Coding Competition</div>
                                <div className={styles.itemDate}>Date: <b>August, 2015</b></div>
                                <div className={styles.position}>Position: <b>1st Rank</b></div>
                            </div>
                        </section>

                        <section>
                            <h3 className={styles.heading}>INTERNSHIP</h3>
                            <div className={styles.internship}>
                                <div className={styles.itemName}>Tata Hispano Motors Carrocera</div>
                                <div className={styles.itemType}>ASP.NET Web Portal</div>
                                <div className={styles.itemDate}>Date: <b>Jan-Apr 2013</b></div>
                                <div className={styles.itemLocation}>Location: <b>Jamshedpur, India</b></div>
                            </div>
                        </section>

                        <section>
                            <h3 className={styles.heading}>EDUCATION</h3>
                            <div className={styles.education}>
                                <ul>
                                    <li>
                                        <div className={styles.educationName}>
                                            <b>Post Graduation</b> <span>2013</span>
                                        </div>
                                        <div className={styles.degree}>
                                            <b>MCA</b> <span>76.8%</span>
                                        </div>
                                        <div className={styles.itemLocation}>
                                            BIT Mesra, Ranchi, India
                                        </div>
                                    </li>
                                    <li>
                                        <div className={styles.educationName}>
                                            <b>Graduation</b> <span>2010</span>
                                        </div>
                                        <div className={styles.degree}>
                                            <b>BCA</b> <span>74.3%</span>
                                        </div>
                                        <div className={styles.itemLocation}>
                                            BIT Mesra, Ranchi, India
                                        </div>
                                    </li>
                                    <li>
                                        <div className={styles.educationName}>
                                            <b>Intermediate</b> <span>2004</span>
                                        </div>
                                        <div className={styles.degree}>
                                            <b>12th</b> <span>71.2%</span>
                                        </div>
                                        <div className={styles.itemLocation}>
                                            BRL DAV Public School, Bhandaridah, Bokaro, India
                                        </div>
                                    </li>
                                    <li>
                                        <div className={styles.educationName}>
                                            <b>Matric</b> <span>2002</span>
                                        </div>
                                        <div className={styles.degree}>
                                            <b>10th</b> <span>77.8%</span>
                                        </div>
                                        <div className={styles.itemLocation}>
                                            BRL DAV Public School, Bhandaridah, Bokaro, India
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>

                    <div className={styles.col2}>
                        <section>
                            <h3 className={styles.heading}>PROFESSIONAL SUMMARY</h3>
                            <div className={styles.professionalSummary}>
                                Full-stack developer building React and Node.js applications with payment integrations and CI/CD. Focused on performance, SEO, and maintainable code.
                                <br /><br />
                            </div>
                        </section>

                        <section className={styles.recentProjects}>
                            <h3 className={styles.heading}>RECENT PROJECTS</h3>
                            {!projectsLoaded && (
                                <p className={styles.projectStatus} aria-live="polite">
                                    Loading recent GitHub projects...
                                </p>
                            )}
                            {projectsFailed && (
                                <p className={styles.projectStatus}>
                                    Project list unavailable.{' '}
                                    <a href="https://github.com/a2rp?tab=repositories" target="_blank" rel="noopener noreferrer">
                                        View all GitHub projects
                                    </a>
                                </p>
                            )}
                            {projectsLoaded && !projectsFailed && recentProjects.length === 0 && (
                                <p className={styles.projectStatus}>
                                    <a href="https://github.com/a2rp?tab=repositories" target="_blank" rel="noopener noreferrer">
                                        View all GitHub projects
                                    </a>
                                </p>
                            )}
                            {recentProjects.length > 0 && (
                                <ul className={styles.recentProjectList}>
                                    {recentProjects.map((project) => (
                                        <li className={styles.recentProject} key={project.id}>
                                            <div className={styles.recentProjectHeader}>
                                                <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                                                    {project.name}
                                                </a>
                                                <time dateTime={project.pushed_at}>
                                                    Updated {formatUpdatedDate(project.pushed_at)}
                                                </time>
                                            </div>
                                            <p>{project.description}</p>
                                            {project.homepage?.startsWith('https://') && (
                                                <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                                                    Live demo
                                                </a>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </section>

                        {/* industry experiecne */}
                        <section>
                            <h3 className={styles.heading}>INDUSTRY EXPERIENCE</h3>
                            <div className={styles.industryExperience}>
                                <div className={styles.nameTenure}>
                                    <h4 className={styles.subheading}>ABIR Networks Private Limited</h4>
                                    <span>May 2024 - May 2025</span>
                                </div>
                                <ul>
                                    <li>
                                        <b>Position:</b> Senior Developer
                                    </li>
                                    <li>
                                        <b>Tech stack:</b> MongoDB, Express, React, Node.js (MERN)
                                    </li>
                                    <li>
                                        <b>Highlights:</b>
                                        <div className={styles.tasksDetail}>
                                            <ul>
                                                <li>
                                                    Delivered the complete <a href="https://abirnetworks.com/" target='_blank' rel='noopener noreferrer'>ABIR Networks website</a> and all public pages for <a href="https://pentestgenix.com/" target='_blank' rel='noopener noreferrer'>Pentestgenix</a> using React and Node.js.
                                                </li>
                                                <li>
                                                    Developed a full-stack MERN event app for <a href="https://karate-premier-league.netlify.app/" target="_blank" rel="noopener noreferrer">Karate Premier League</a>.
                                                </li>
                                                <li>
                                                    For a separate Meducate project, developed the group pages in React.
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.industryExperience}>
                                <div className={styles.nameTenure}>
                                    <h4 className={styles.subheading}>Modern Identity Private Limited</h4>
                                    <span>July 2022 - May 2023</span>
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
                                        <div className={styles.tasksDetail}>
                                            <ul>
                                                <li>Developed an admin panel and user management system with React, Node.js, Firestore, Firebase Functions, and MongoDB.</li>
                                                <li>Implemented online payments using Stripe and Razorpay.</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.industryExperience}>
                                <div className={styles.nameTenure}>
                                    <h4 className={styles.subheading}>Tech Active Solutions India Pvt. Ltd</h4>
                                    <span>October 2021 - June 2022</span>
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
                                        <div className={styles.tasksDetail}>
                                            <ul>
                                                <li>Developed a text chat system and user profile management features.</li>
                                                <li>Built MySQL data views with DataTables.</li>
                                                <li>Integrated Stripe payment functionality into a website I worked on.</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* freelancing experience */}
                        <section>
                            <h3 className={`${styles.heading} ${styles.freelancingHeading}`}>FREELANCING EXPERIENCE</h3>
                            <div className={styles.freelancingExperience}>
                                <div className={styles.tenure}>
                                    <b>Tenure:</b> June 2023 - May 2024,  January 2014 - April 2020
                                </div>
                                <div className={styles.techStack}>
                                    <b>Tech stack:</b> React, Node.js, MongoDB, Razorpay/Stripe, PHP (CodeIgniter), MySQL, jQuery
                                </div>
                                <div className={styles.projects}>
                                    <b>Projects:</b>
                                    <div>
                                        <ul>
                                            <li>
                                                <b>Client work:</b> Built websites and applications for restaurants, clinics, coaching, NGOs, schools, tutoring, cafés, and retail.
                                            </li>
                                            <li>
                                                <b>Solutions:</b> Delivered QR ordering, admissions, appointment, donation, POS, booking, basic e-commerce, inventory, and CSV workflows.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className={styles.resumeBottom}>
                    <time>{formatResumeDate(resumeDate)}</time>
                    <span>Bengaluru, The Republic of India</span>
                </div>
            </div>
        </>
    )
}

export default Resume

