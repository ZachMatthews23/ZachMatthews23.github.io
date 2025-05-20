import React from 'react';
import { DiReact, DiCss3, DiDatabase, DiGit, DiHtml5, DiJsBadge, DiMongodb, DiNodejs, DiTerminal, DiTrello, DiBootstrap} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, Grid } from './TechnologiesStyles';
import { SiJsonwebtokens } from 'react-icons/si'

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of programming technologies in the world of web development,
      from front-end to back-end.
    </SectionText>
    <List>
      <ListItem>
        <Grid className="list-grid">
          <DiReact size="3.5rem"/>
          <DiJsBadge size="3.5rem" />
          <DiHtml5 size="3.5rem"/>
          <DiCss3 size="3.5rem"/>
        </Grid>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js <br />
            JavaScript< br />
            HTML5 <br />
            CSS3
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <Grid>
          <DiDatabase size="3.5rem"/>
          <DiMongodb size="3.5rem"/>
          <DiNodejs size="3.5rem"/>
          <SiJsonwebtokens size="3.5rem"/>
        </Grid>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            Databases <br />
            MongoDB <br />
            Node.js <br />
            Express <br />
            Mongoose <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <Grid>
          <DiBootstrap size="3.5rem"/>
          <DiGit size="3.5rem"/>
          <DiTrello size="3.5rem"/>
          <DiTerminal size="3.5rem" />
        </Grid>
        <ListContainer>
          <ListTitle>Miscellaneous</ListTitle>
          <ListParagraph>
            Experience with <br />
            Bootstrap <br />
            Git <br />
            Trello <br />
            Terminal
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
