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
                        <p>Hey, I'm Joel Seidel!</p>
                        <p>I'm a technical consultant and software developer (for money & for fun) from Dallas, TX</p>
                        <p>As you're reading this, I'm probably working hard on delivering value for a client, out on the lake on a kayak, watching a sports team I like lose, or trying to keep up with my labrador's boundless energy. That is, unless you're reading this at night, in which case I'm probably sleeping.</p>
                        <ContentHeader>
                            <h1 class="font-title">What does he do?</h1>
                        </ContentHeader>
                        <h3 class="font-title">Consulting</h3>
                        <p>I enjoy enabling development teams to deliver consistent value to clients. I like partnering with business folks to create high quality technical solutions and then driving the implementation of that solution from beginning to end.</p>
                        <p>As an eternally results-driven person, I strongly believe in achieving results by elevating the performance of those around me with strategic workflows and by building strong team cultures. I'm committed bringing a leadership mentality; that is, leading by trust and influence instead of title.</p>
                        <p>I bring strong full stack development skills, a willingness to fill any role asked of me, and a desire to win to every team I join.</p>
                        <h3 class="font-title">Software Development</h3>
                        <p>Not only do I love designing and talking about building software, I enjoy building it as well. I wrote my first line of code in the 7th grade to win a middle school video game development competition and haven't looked back.</p>
                        <p>I have experience in working on both the front and back ends at both the start-up and Fortune 500 levels. While I'd say I'm <i>probably</i> a little stronger with Java than JavaScript (or Typescript) - I can build my UI and serve it with microservices too.</p>
                        <p>My favorite thing about software development is not the language, the platform, or the project, but the design patterns that makes up good, readable, highly scalable software.</p>
                        <h3 class="font-title">Rooting for Sports Teams That Are Not Good At Their Respective Sports</h3>
                        <p>While I don't think <i>I'm</i> the problem, my sports allegiances span multiple states and somehow all of my favorite teams are abysmal.</p>
                        <p>I was a Sixers fan during The Process, an enjoyer of the eternal dumpster fire that is the Detroit Lions, and a Detroit Tigers fan who still had a bedtime the last time they were any good (2013).</p>
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
                                    <td>Dallas, TX</td>
                                </tr>
                                <tr>
                                    <td><strong>Occupation:</strong></td>
                                    <td>Technology Project Manager</td>
                                </tr>
                                <tr>
                                    <td><strong>College:</strong></td>
                                    <td>Penn State University</td>
                                </tr>
                                <tr>
                                    <td><strong>Degree:</strong></td>
                                    <td>B.S. in Information Science & Technology</td>
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