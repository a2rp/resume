import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        width: 100%;
        max-width: 1123px;
        min-width: 0;
        min-height: 0;
        margin: 0 auto;
        border: 1px solid #d8e0e6;
        border-radius: 12px;
        background: #fff;
        box-shadow: 0 8px 28px rgba(16, 34, 55, 0.08);

        @media print {
            max-width: none;
            border: 0;
            border-radius: 0;
            box-shadow: none;
        }
    `,
    DownloadResume: styled.button`
        margin: 14vh auto;
        padding: 5px 15px;
    `,
    TopSection: styled.div`
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(245px, auto);
        align-items: start;
        gap: 28px;
        min-width: 0;
        padding: 25px 28px;
        border-bottom: 1px solid #d8e0e6;

        @media (max-width: 760px) {
            grid-template-columns: minmax(0, 1fr) minmax(210px, 0.8fr);
            gap: 18px;
            padding: 22px;
        }

        @media (max-width: 620px) {
            grid-template-columns: minmax(0, 1fr);
            gap: 18px;
            padding: 20px 18px;
        }

        @media print {
            grid-template-columns: minmax(0, 1fr) minmax(220px, auto);
            gap: 18px;
            padding: 0 0 14px;
        }
    `,
    LeftCol: styled.div`
        min-width: 0;

        .name {
            margin: 0;
            color: #102237;
            font-size: clamp(1.8rem, 3.2vw, 2.25rem);
            font-weight: 800;
            letter-spacing: -0.035em;
            line-height: 1.15;
            overflow-wrap: anywhere;
        }

        .profession {
            margin: 8px 0 12px;
            color: #4c5d6d;
            font-size: 1.05rem;
            font-weight: 600;
            line-height: 1.35;
        }

        .githubLinkedin {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 8px 22px;
            margin-top: 12px;

            .github,
            .linkedin {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                min-width: 0;
                padding: 3px 0;
                border-bottom: 1px solid #8da0ae;
                color: #075f8f;
                line-height: 1.35;
                text-decoration: none;
                overflow-wrap: anywhere;
            }

            .github:hover,
            .linkedin:hover {
                border-color: #0d6694;
                color: #08466a;
            }
        }
    `,
    RightCol: styled.div`
        min-width: 0;
    `,
};

export const PersonalInfo = styled.div`
    min-width: 0;

    .content {
        min-width: 0;

        ul {
            display: grid;
            gap: 7px;
            margin: 0;
            padding: 0;
            list-style: none;

            li {
                display: flex;
                align-items: flex-start;
                gap: 9px;
                min-width: 0;
                line-height: 1.4;

                span {
                    color: #465868;
                }

                &.date,
                &.position,
                &.location {
                    display: grid;
                    grid-template-columns: 70px minmax(0, 1fr);
                }

                .icon {
                    flex: 0 0 16px;
                    width: 16px;
                    margin-top: 3px;
                    color: #0d6694;
                }

                .websiteLinks {
                    min-width: 0;

                    a {
                        color: #075f8f;
                        text-decoration: underline;
                        text-underline-offset: 0.15em;
                        overflow-wrap: anywhere;
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
            span {
                padding: 2px;
            }
        }
    }
`;

export const Main = styled.div`
    display: grid;
    grid-template-columns: minmax(205px, 250px) minmax(0, 1fr);
    min-width: 0;
    height: auto;
    border-top: 1px solid #d8e0e6;

    .col1 {
        display: flex;
        min-width: 0;
        flex-direction: column;
        justify-content: flex-start;
        gap: 20px;
        padding: 18px 20px 24px;
        border-right: 1px solid #d8e0e6;

        section {
            min-width: 0;
        }
    }

    .col2 {
        min-width: 0;
        padding: 18px 24px 26px;

        > section + section {
            margin-top: 20px;
        }
    }

    @media (max-width: 760px) {
        grid-template-columns: minmax(190px, 220px) minmax(0, 1fr);

        .col1 {
            padding: 17px 15px 22px;
        }

        .col2 {
            padding: 17px 18px 22px;
        }
    }

    @media (max-width: 620px) {
        grid-template-columns: minmax(0, 1fr);

        .col1 {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            align-items: start;
            gap: 18px 14px;
            border-right: 0;
            border-bottom: 1px solid #d8e0e6;
            padding: 18px;
        }

        .col2 {
            padding: 18px;
        }
    }

    @media (max-width: 430px) {
        .col1 {
            grid-template-columns: minmax(0, 1fr);
            gap: 16px;
            padding: 16px;
        }

        .col2 {
            padding: 16px;
        }
    }

    @media print {
        grid-template-columns: 205px minmax(0, 1fr);

        .col1 {
            gap: 12px;
            padding: 12px 12px 12px 0;
        }

        .col2 {
            padding: 12px 0 12px 16px;
        }
    }
`;

export const TechList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 6px;
    margin: 0;
    padding: 12px 0 2px;
    list-style: none;

    li {
        padding: 2px 7px;
        border: 1px solid #d2dce4;
        border-radius: 4px;
        background: #f4f7f9;
        color: #263746;
        font-size: 0.84rem;
        line-height: 1.4;
        overflow-wrap: anywhere;
    }
`;

export const Awards = styled.div`
    padding: 10px 0 0;

    .name,
    .type {
        color: #23303d;
        font-weight: 700;
        line-height: 1.4;
    }

    .date,
    .position {
        display: flex;
        justify-content: space-between;
        gap: 8px;
        margin-top: 4px;
        color: #465868;
        line-height: 1.4;
    }
`;

export const Internship = styled.div`
    padding: 10px 0 0;

    .name,
    .type {
        color: #23303d;
        font-weight: 700;
        line-height: 1.4;
    }

    .date,
    .location {
        display: flex;
        justify-content: space-between;
        gap: 8px;
        margin-top: 4px;
        color: #465868;
        line-height: 1.4;
    }
`;

export const Education = styled.div`
    padding: 10px 0 0;

    ul {
        margin: 0;
        padding: 0;
        list-style: none;

        li {
            margin-bottom: 14px;
            line-height: 1.4;

            &:last-child {
                margin-bottom: 0;
            }

            .name,
            .degree {
                display: flex;
                justify-content: space-between;
                gap: 8px;
            }

            .name span,
            .degree span {
                flex: 0 0 auto;
            }

            .location {
                margin-top: 2px;
                color: #526272;
                overflow-wrap: anywhere;
            }
        }
    }
`;

export const Heading = styled.h3`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    min-width: 0;
    margin: 0;
    padding: 0 0 7px;
    border-bottom: 1px solid #aab7c2;
    color: #102237;
    font-size: 0.94rem;
    font-weight: 800;
    letter-spacing: 0.065em;
    line-height: 1.35;

    a {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        min-width: 0;
        color: #075f8f;
        font-size: 0.82rem;
        font-weight: 600;
        letter-spacing: 0;
        text-decoration: underline;
        text-underline-offset: 0.15em;
        overflow-wrap: anywhere;
    }

    &.allProjects {
        flex-wrap: wrap;
        margin-top: 0;
    }

    @media (max-width: 430px) {
        align-items: flex-start;
        flex-direction: column;
        gap: 6px;
    }
`;

export const ProfessionalSummary = styled.div`
    padding: 12px 0 0;
    color: #334454;
    line-height: 1.65;
`;

export const IndustryExperience = styled.div`
    min-width: 0;
    margin-top: 16px;
    padding: 0 0 2px;

    .nameTenure {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
        min-width: 0;

        .subheading {
            min-width: 0;
            margin: 0;
            color: #172d41;
            font-size: 1rem;
            line-height: 1.4;
            overflow-wrap: anywhere;
        }

        span {
            flex: 0 0 auto;
            color: #526272;
            font-size: 0.9rem;
            line-height: 1.45;
            text-align: right;
        }
    }

    > ul {
        margin: 8px 0 0;
        padding-left: 17px;

        > li {
            display: grid;
            grid-template-columns: 80px minmax(0, 1fr);
            gap: 4px 8px;
            margin: 4px 0;
            color: #334454;
            line-height: 1.5;
            overflow-wrap: anywhere;

            > b {
                color: #23303d;
            }
        }

        div.tasksDetail {
            grid-column: 2;
            min-width: 0;

            ul {
                margin: 0;
                padding-left: 16px;

                li {
                    display: list-item;
                    margin: 2px 0;
                    color: #334454;
                    overflow-wrap: anywhere;
                }
            }

            a {
                color: #075f8f;
                text-decoration: underline;
                text-underline-offset: 0.15em;
                overflow-wrap: anywhere;
            }

            span {
                color: #526272;
            }
        }
    }

    @media (max-width: 430px) {
        .nameTenure {
            flex-direction: column;
            gap: 2px;

            span {
                text-align: left;
            }
        }

        > ul > li {
            grid-template-columns: minmax(0, 1fr);
            gap: 1px;
        }

        > ul div.tasksDetail {
            grid-column: 1;
        }
    }
`;

export const FreelancingExperience = styled.div`
    min-width: 0;
    padding: 12px 0 0;
    color: #334454;
    line-height: 1.5;

    .tenure,
    .techStack,
    .projects {
        display: grid;
        grid-template-columns: 80px minmax(0, 1fr);
        gap: 4px 8px;
        margin: 4px 0;
        overflow-wrap: anywhere;
    }

    .projects > div {
        min-width: 0;
    }

    ul {
        margin: 0;
        padding-left: 17px;

        li {
            margin: 3px 0;
            overflow-wrap: anywhere;
        }

        a {
            color: #075f8f;
            text-decoration: underline;
            text-underline-offset: 0.15em;
            overflow-wrap: anywhere;
        }
    }

    @media (max-width: 430px) {
        .tenure,
        .techStack,
        .projects {
            grid-template-columns: minmax(0, 1fr);
            gap: 1px;
        }
    }
`;

export const RecentProjectsWrapper = styled.div`
    padding: 12px 0 0;
    color: #334454;

    a {
        color: #075f8f;
        text-decoration: underline;
        text-underline-offset: 0.15em;
    }
`;

export const Project = styled.div`
    min-width: 0;
    margin-bottom: 15px;

    ul {
        margin: 0;
        padding-left: 18px;

        li {
            margin: 4px 0;
            overflow-wrap: anywhere;

            a {
                color: #075f8f;
                text-decoration: underline;
                text-underline-offset: 0.15em;

                &.projectLink {
                    margin-left: 10px;
                }
            }
        }

        li.tech,
        li.about {
            display: grid;
            grid-template-columns: 100px minmax(0, 1fr);
            gap: 8px;
        }
    }
`;

export const AllProjectsWrapper = styled.div`
    padding: 12px 0 0;
    color: #334454;

    ul {
        margin: 0;
        padding-left: 18px;

        li {
            margin: 4px 0;
            overflow-wrap: anywhere;

            a {
                color: #075f8f;
                text-decoration: underline;
                text-underline-offset: 0.15em;
            }
        }
    }
`;
