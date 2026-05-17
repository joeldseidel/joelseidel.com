import React from 'react';
import styled from 'styled-components';
import { ColumnContainer, Container, ContentHeader, Image, InfoTable, PhotoColumn, TextColumn, Title, TitleContainer } from '../components/Layout';

const ArticleLink = styled.a`
    margin-top: 8px;
    color: #44546a;
    font-family: 'PT Sans Narrow', sans-serif;
`;

const ArticleList = styled.ul`
    & li {
        margin-top: 4px;
    }
`;

export default class MeetJoel extends React.Component {
    render() {
        return (
            <>
                <ColumnContainer>
                    <TextColumn>
                        <ContentHeader>
                            <h1 class="font-title">Who is this man?</h1>
                        </ContentHeader>
                        <p>Glad you asked. I’m a project manager with a knack for turning chaos into clean roadmaps, jargon into clear communication, and coffee into successful launches. Whether it’s wrangling teams, untangling processes, or making sure deadlines are more than just hopeful suggestions, I get it done - with a smile and maybe a joke or two. If you're looking for someone who can juggle timelines, stakeholders, and an alarming number of browser tabs, you’ve found your guy.</p>
                        <p>As you're reading this, I'm probably working hard on delivering value for a client, out on the lake on my kayak, watching a sports team I like lose, or trying to keep up with my labrador's boundless energy. That is, unless you're reading this at night, in which case I'm probably sleeping.</p>
                        <ContentHeader>
                            <h1 class="font-title">What does he do?</h1>
                        </ContentHeader>
                        <h3 class="font-title">He builds, leads, and delivers</h3>
                        <p>It started at Penn State, where I studied Information Science and Technology, blending technical problem-solving with an understanding of economics. While working with the Nittany AI Alliance, I saw firsthand how artificial intelligence could transform businesses, taking what once felt like science fiction and turning it into real, tangible solutions.</p>
                        <p>That curiosity and drive led me to Accenture, where I played a key role in bringing a first-of-its-kind virtual assistant product to life. The technology was cool, no doubt, but it ultimatley was about working with teams, navigating challenges, and ensuring that a complex, ambitious project made it to production. From there, I stepped into leading a software team, where I found a passion for not just managing work, but shaping a culture of collaboration and accountability. Delivering critical software components meant more than just meeting deadlines - it was about creating an environment where engineers could thrive and complex problems could be tackled effectively.</p>
                        <p>That mindset carried into my role at Citi, where I managed projects for a reference data platform, balancing technical execution with stakeholder management. Through it all, I’ve committed to leadership through trust and influence, ensuring that when challenges arise (and they always do) there’s someone who will take ownership, drive progress, and see the project through to completion.</p>
                        <p>My favorite thing about technology is not the programming language, the platform, or the project, but the design patterns that makes up good, readable, highly scalable software. In the AI age, the bottleneck won't be building - it will be deciding what to build. My passion throughout my career has been aligning business to tech and following through with execution - a path that I look forward to taking into the future, whatever it may look like.</p>
                        <h3 class="font-title">He roots for sports teams that are not good</h3>
                        <p>While I don't think <i>I'm</i> the problem, my sports allegiances span multiple states and somehow all of my favorite teams are abysmal. I was a Mav's fan during The Luka Trade, an enjoyer of the eternal dumpster fire that is the Detroit Lions (hey, they're not so bad anymore!), and a Detroit Tigers fan who still had a bedtime the last time they were actually any good (2013).</p>
                        <p>If long-suffering is a virtue, I'm a saint of a sports fan.</p>
                        <ContentHeader>
                            <h1 class="font-title">How can I contact him?</h1>
                        </ContentHeader>
                        <p>Let's talk - reach out and I'd be happy to chat about <strike>anything</strike> most things.</p>
                        <ul>
                            <li>Send me an email: <a href="mailto:me@joelseidel">me@joelseidel.com</a></li>
                            <li>Connect with me on LinkedIn: <a target="_blank" href="https://www.linkedin.com/in/joel-seidel-258465164/" rel="noreferrer">linkedin.com/in/joel-seidel-258465164</a></li>
                        </ul>
                    </TextColumn>
                    <PhotoColumn>
                        <Container>
                            <TitleContainer>
                                <Title>Joel Seidel</Title>
                            </TitleContainer>
                            <Image src="me.jpg" alt="Joel Seidel"/>
                            <InfoTable>
                                <tbody>
                                <tr>
                                    <td><strong>Based In:</strong></td>
                                    <td>Dallas-Fort Worth, TX</td>
                                </tr>
                                <tr>
                                    <td><strong>Occupation:</strong></td>
                                    <td>Technical Project Manager</td>
                                </tr>
                                <tr>
                                    <td><strong>College:</strong></td>
                                    <td>Penn State University</td>
                                </tr>
                                <tr>
                                    <td><strong>Degree:</strong></td>
                                    <td>B.S. in Information Science & Technology; Economics Minor</td>
                                </tr>
                                <tr>
                                    <td><strong>MLB Debut:</strong></td>
                                    <td>N/A</td>
                                </tr>
                                </tbody>
                            </InfoTable>
                        </Container>
                        <Container>
                            <TitleContainer>
                                <Title>In The News</Title>
                            </TitleContainer>
                            <ArticleList>
                                <li><ArticleLink target="_blank" href="https://www.psu.edu/news/academics/story/overcoming-homelessness-and-hardships-earn-penn-state-degree/">Overcoming Homelessness and Hardships to Earn Penn State Degree</ArticleLink></li>
                                <li><ArticleLink target="_blank" href="https://www.psu.edu/news/academics/story/student-startup-aims-improve-health-care-through-technology/">Student Start-Up Aims to Improve Health Care Through Technology</ArticleLink></li>
                                <li><ArticleLink target="_blank" href="https://nittanyai.psu.edu/blog/from-advance-to-accenture-joel-seidel-launches-his-career-with-the-help-of-nittany-ai-alliance/">From Advance to Accenture - Joel Seidel Launches His Career with the Help of Nittany AI</ArticleLink></li>
                                <li><ArticleLink target="_blank" href="https://nittanyai.psu.edu/alliance-programs/nittany-ai-advance/ai-for-good-projects/philadelphia-public-transit/">AI for Good Projects: Philadelphia Public Transit</ArticleLink></li>
                                <li><ArticleLink target="_blank" href="https://www.smartcitiesdive.com/news/psu-philadelphias-smart-city-transit-telework/584762/">PSU Team Maps Philadelphia's Telework Trends</ArticleLink></li>
                            </ArticleList>
                        </Container>
                    </PhotoColumn>
                </ColumnContainer>
            </>
        );
    }
}