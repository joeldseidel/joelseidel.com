import React from 'react';
import { ColumnContainer, Container, ContentHeader, Image, InfoTable, PhotoColumn, TextColumn, Title, TitleContainer } from '../components/Layout';

export default class MeetFrank extends React.Component {
    render() {
        return (
            <>
                <ColumnContainer>
                    <TextColumn>
                        <ContentHeader>
                            <h1 class="font-title">Who is this man?</h1>
                        </ContentHeader>
                        <p>This is Franklin (Frank) Seidel.</p>
                        <p>He is a 1 year old black labrador from Dallas, TX</p>
                        <ContentHeader>
                            <h1 class="font-title">What does he do?</h1>
                        </ContentHeader>
                        <h3 class="font-title">Eat</h3>
                        <p>Frank will consume nearly any material whether it resembles something edible or not. He is on a mission to remove every chicken bone from the streets of Dallas by eating them. He is truly a philanthropic hero for this.</p>
                        <h3 class="font-title">Sleep</h3>
                        <p>Frank sleeps an average of 14-18 hours per day. It is a very challenging schedule and I don't know how he keeps up with it.</p>
                        <h3 class="font-title">Guard</h3>
                        <p>In the 6-10 hours a day he is awake, Frank can usually be found guarding his backyard from a strategically selected location. The neighborhood can be confident that no stray cats will go un-barked at. Frank has become a folk hero of sorts in the area.</p>
                    </TextColumn>
                    <PhotoColumn>
                        <Container>
                            <TitleContainer>
                                <Title>Franklin Seidel</Title>
                            </TitleContainer>
                            <Image src="frank.jpg" alt="Franklin Seidel"/>
                            <InfoTable>
                                <tbody>
                                    <tr>
                                        <td><strong>Based In:</strong></td>
                                        <td>Dallas, TX</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Occupation:</strong></td>
                                        <td>Dog</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Breed:</strong></td>
                                        <td>Black Labrador</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Interests:</strong></td>
                                        <td>Swimming, Beef Bones, Shredding Things</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Fears:</strong></td>
                                        <td>Vaccuum, metal bowls, cats</td>
                                    </tr>
                                </tbody>
                            </InfoTable>
                        </Container>
                    </PhotoColumn>
                </ColumnContainer>
            </>
        )
    }
}