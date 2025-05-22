import React from "react";
import {
  DiAngularSimple,
  DiReact,
  DiCss3,
  DiDatabase,
  DiGit,
  DiHtml5,
  DiJsBadge,
  DiMongodb,
  DiNodejs,
  DiTerminal,
  DiTrello,
  DiBootstrap,
} from "react-icons/di";
import { SiTypescript, SiJest, SiNx, SiNgrx } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  Grid,
} from "./TechnologiesStyles";
import { SiJsonwebtokens } from "react-icons/si";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have experience with a broad range of programming technologies across
      the full web development stack, encompassing both front-end and back-end
      development.
    </SectionText>
    <List>
      <ListItem>
        <Grid className="list-grid">
          <DiAngularSimple size="3.5rem" />
          <SiTypescript size="3.5rem" />
          <DiReact size="3.5rem" />
          <DiJsBadge size="3.5rem" />
          <DiHtml5 size="3.5rem" />
          <DiCss3 size="3.5rem" />
        </Grid>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with: <br />
            Angular <br />
            TypeScript <br />
            React.js <br />
            Next.js <br />
            JavaScript <br />
            WinForms <br />
            HTML5 <br />
            CSS3 <br />
            C# <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <Grid>
          <DiDatabase size="3.5rem" />
          <DiMongodb size="3.5rem" />
          <DiNodejs size="3.5rem" />
          <SiJsonwebtokens size="3.5rem" />
        </Grid>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with: <br />
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
          <DiBootstrap size="3.5rem" />
          <DiGit size="3.5rem" />
          <DiTrello size="3.5rem" />
          <SiJest size="3.5rem" />
          <SiNx size="3.5rem" />
          <SiNgrx size="3.5rem" />
        </Grid>
        <ListContainer>
          <ListTitle>Miscellaneous</ListTitle>
          <ListParagraph>
            Experience with: <br />
            Bootstrap <br />
            Azure <br />
            Git <br />
            Trello <br />
            Jira <br />
            Jest <br />
            Nx <br />
            NgRx <br />
            RxJS
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
