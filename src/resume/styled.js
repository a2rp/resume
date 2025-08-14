import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        /* border: 10px solid #f00; */
        max-width: 1123px;
        margin: auto;
        height: 100vh;
    `,
    TopSection: styled.div`
        /* border-bottom: 1px solid r666(0, 0, 0, 1); */
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 15px;
        height: 130px;
    `,
    LeftCol: styled.div`
        .name {
            font-size: 2rem;
            font-weight: 900;
        }
        .profession {
            margin-top: -12px;
        }
        .githubLinkedin {
            margin-top: -8px;
            display: flex;
            gap: 50px;

            .github,
            .linkedin {
                display: flex;
                gap: 10px;
                align-items: center;
                color: #000;

                text-decoration: none;
                padding: 1px 0;
                border-bottom: 1px solid #666;
            }
        }
    `,
    RightCol: styled.div``,
};

export const PersonalInfo = styled.div`
    margin-top: 15px;

    .content {
        margin-top: 5px;
        padding: 0 15px;

        ul {
            list-style: none;

            li {
                display: flex;
                gap: 15px;
                align-items: flex-start;

                span {
                    color: #333;
                }

                &.date,
                &.position,
                &.location {
                    display: grid;
                    grid-template-columns: 70px 1fr;
                }

                .icon {
                    margin-top: 3px;
                }

                .websiteLinks {
                    a {
                        text-decoration: none;
                        padding: 1px 0;
                        border-bottom: 1px solid #666;
                        color: #000;
                    }
                }
            }
        }

        ul.education {
            li {
                display: block;
                margin-bottom: 10px;
            }
        }

        .listWrapper {
            /* display: flex;
            justify-content: center;
            flex-wrap: wrap; */

            span {
                /* border: 1px solid #aaa; */
                padding: 2px;
            }
        }
    }
`;

export const Main = styled.div`
    position: relative;
    border-top: 1px solid rgba(0, 0, 0, 1);
    height: calc(100% - 150px);
    display: grid;
    grid-template-columns: 250px 1fr;

    .col1 {
        border-right: 1px solid #000;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        /* &:before {
            content: "";
            position: absolute;
            right: -5px;
            top: -5px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #000;
        } */
    }

    .col2 {
    }
`;

export const TechList = styled.ul`
    /* border: 1px solid #000; */
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 15px 10px 15px;

    li {
        border: 1px solid #aaa;
        padding: 0 5px;
    }
`;

export const Awards = styled.div`
    padding: 0 15px 15px 15px;

    .name,
    .type {
        font-weight: 700;
        /* text-align: center; */
    }
    .date,
    .position {
        display: flex;
        justify-content: space-between;
    }
`;

export const Internship = styled.div`
    padding: 0 15px 15px 15px;

    .name,
    .type {
        font-weight: 700;
        /* text-align: center; */
    }
    .date,
    .location {
        display: flex;
        justify-content: space-between;
    }
`;

export const Education = styled.div`
    padding: 0 15px 15px 15px;

    ul {
        list-style: none;

        li {
            margin-bottom: 15px;

            .name {
                display: flex;
                justify-content: space-between;
            }
            .degree {
                display: flex;
                justify-content: space-between;
            }
            .location {
            }
        }
    }
`;

export const Heading = styled.h3`
    border-bottom: 1px solid #666;
    padding: 0 15px;
    margin: 0;

    a {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    &.allProjects {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
    }
`;

export const ProfessionalSummary = styled.div`
    /* border: 1px solid #000; */
    padding: 5px 15px;
`;

export const IndustryExperience = styled.div`
    /* border: 1px solid #f00; */
    /* margin-bottom: 10px; */
    padding: 5px;

    .nameTenure {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px 0 0;

        .subheading {
            margin-bottom: -5px;
        }
        span {
            /* color: rgba(0, 0, 0, 0.7); */
        }
    }
    ul {
        margin-left: 3px;
        padding-left: 10px;

        li {
            display: grid;
            grid-template-columns: 80px 1fr;

            div.tasksDetail {
                ul {
                    padding-left: 0;
                    /* display: flex; */

                    li {
                        display: flex;
                        gap: 5px;
                        /* justify-content: space-between; */

                        a {
                            display: inline-block;
                            color: #000;
                            text-decoration: none;
                            padding: 1px 0;
                            border-bottom: 1px solid #666;
                        }
                    }
                }
            }
        }
    }
`;

export const FreelancingExperience = styled.div`
    /* border: 1px solid #f00; */
    /* margin-bottom: 15px; */
    padding: 15px;

    .tenure,
    .techStack,
    .projects {
        display: grid;
        grid-template-columns: 80px 1fr;
    }
    div {
        ul {
            padding-left: 15px;

            li {
                a {
                    text-decoration: none;
                    color: #000;
                    padding: 1px 0;
                    border-bottom: 1px solid #666;
                }
            }
        }
    }
`;

export const RecentProjectsWrapper = styled.div`
    padding: 15px;

    a {
        text-decoration: none;
        color: #000;
    }
`;

export const Project = styled.div`
    margin-bottom: 15px;

    ul {
        padding-left: 0;
        list-style: none;

        li {
            a {
                text-decoration: none;
                color: #000;

                &.projectLink {
                    margin-left: 20px;
                }
            }
        }

        li.tech,
        li.about {
            display: grid;
            grid-template-columns: 100px 1fr;

            a {
                text-decoration: none;
                color: #000;
            }
        }
    }
`;

export const AllProjectsWrapper = styled.div`
    padding: 15px;

    ul {
        padding-left: 15px;

        li {
            a {
                text-decoration: none;
                color: #000;
                padding: 1px 0;
                /* border-bottom: 1px solid #666; */
                margin-right: 15px;
            }
        }
    }
`;
