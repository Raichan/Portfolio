import React, { Component } from 'react';
import styled from 'styled-components'

const Tag = styled.div`
  border-radius: 8px;
  background: rgb(18,128,42);
  display: inline-block;
  padding: 4px 16px;
  margin: 0 3px;
  color: rgba(255,255,255,.9);
`

class AboutMe extends Component {
  render() {
    return (
      <div class="contentbox">
        <div class="section">
          <h1 class="centered">About me</h1>
          <p>
            Software developer by education, project manager and event organizer by experience. Looking for work, hoping to use my skills for a sustainable world and tackling climate change in one way or another.
          </p>
          <p>Currently:
            <ul>
              <li>Recently graduated full-stack developer with ~4 years of work experience</li>
              <li>Assistant Producer for an international live action roleplaying event</li>
              <li>Organizing several major Finnish fan conventions</li>
              <li>Climate activist looking for new ways to make a difference</li>
            </ul>
          </p>
          <hr class="divider"></hr>
        </div>
        <div class="section">
          <h3>Technologies</h3>
          <p><b>Active work experience</b><br/>
          <Tag>C#</Tag>
          <Tag>HTML</Tag>
          <Tag>CSS</Tag>
          <Tag>JavaScript</Tag>
          <Tag>REST API</Tag>
          <Tag>SQL</Tag>
          </p>
          <p><b>Personal projects</b><br/>
          <Tag>PHP</Tag>
          <Tag>WordPress</Tag>
          <Tag>Joomla!</Tag>
          <Tag>Node.js</Tag>
          <Tag>React</Tag>
          <Tag>Firebase</Tag>
          </p>
          <p><b>Currently learning</b><br/>
          <Tag>Angular</Tag>
          <Tag>NoSQL</Tag>
          <Tag>Web Animation</Tag>
          </p>
        </div>
        <hr class="divider"></hr>
        <div class="section">
          <h3>Experience</h3>
          <div>
            <p><b>Assistant Producer</b><br/>
            <i>The company P<br/>
            Apr 2019 – Present</i></p>
            <p>I'm currently freelancing as the Assistant Producer of College of Wizardry, an international live action roleplaying game set in Czocha Castle, Poland. In a four-day immersive experience, 135 participants and a crew of 30 turn the castle in to a magical college and live the life of its staff and students.</p>
            <p>I have been an active participant in College of Wizardry events since 2015 and joined the crew in 2019. My areas of responsibility include event design, participant management and customer service as well as managing many practical aspects of the production. I also do a lot of copywriting including web content, participant materials and internal guides.</p>
          </div>
          <div>
            <p><b>Software Engineer</b><br/>
            <i>Polea Oy<br/>
            May 2016 – Sep 2019</i></p>
            <p>I worked as a full stack developer improving the enterprise resource planning software Haulbag and the customizable webshops connected to it. My job was mainly developing the software according to the customers’ needs, and as the only employee in the company I was in charge of many different areas. I also implemented integrations to several other systems. My master’s thesis focused on building a website for one of our customers and how the interfaces of Haulbag and WordPress can be used together to synchronize data between the systems and improve the site's performance.</p>
          </div>
        </div>
        <hr class="divider"></hr>
        <div class="section">
          <h3>Education</h3>
          <div>
            <p><b>Master of Science, Computer Science</b><br/>
            <i>2015-2019 Aalto University</i></p>
            <p>Master's Programme in Computer, Communication and Information Sciences<br/>
            Major: Computer Science<br/>
            Track: Web Technologies, Applications and Science<br/>
            Master’s thesis: Älytekstiilien vaatimukset yhteisöllisen alustan rajapinnoissa / Demands of Smart Textiles in Community Platform Interfaces</p>
          </div>
          <div>
            <p><b>Bachelor of Science, Computer Science</b><br/>
            <i>2012-2015 Aalto University<br/>
            2011-2012 Tampere University of Technology</i></p>
            <p>Major: Media Technology<br/>
            Minor: WWW Technologies<br/>
            Bachelor’s thesis: Tietovuopohjainen visuaalinen web-ohjelmointi / Dataflow-based Visual Web Programming</p>
          </div>
          <div>
            <p><b>High School</b><br/>
            <i>2008-2011 Tampereen yhteiskoulun lukio / Tampere Arts-Oriented Senior Secondary School</i></p>
          </div>
        </div>
    </div>
    );
  }
}
 
export default AboutMe;