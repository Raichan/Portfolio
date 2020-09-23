import React, { Component } from 'react';
import Tag from '../Tag';

class AboutMe extends Component {
  render() {
    return (
      <div className="contentbox">
        <div className="section">
          <h1 className="centered">
            <span className="anchor" id="AboutMe"> &nbsp; </span>
            About me</h1>
          <p>
            I'm a frontend person who enjoys visually pleasing and user-friendly websites. I'm currently expanding into modern web technologies and have had fun with things like React and web animation. Backend isn't a problem either though, as I worked as a full stack developer for almost four years. I've also dealt with a lot of API integrations, and I enjoy making different services work together.
          </p>
          <p>
            I'm usually the one who makes sure things get done, either solo or in a group. My tasks were mostly independent work at my previous job, but I have also been a part of various group projects for the most part of my life. In my free time I participate in organizing various fan conventions and live action roleplaying games both in Finland and internationally, so I'm used to working in a team both as a member and a leader. This has also given me excellent project management skills - I love detailed schedules and colour-coded spreadsheets. 
          </p>
          <p>
            Ever since my graduation in 2019 I have been figuring out what I want from life, and in the current state of the world I want to use my working hours to contribute to a greener future. Therefore I'm very interested in fields such as carbon compensation, circular economy and cleantech. The best cure for climate anxiety is climate action, and I want to be a part of the change we need.
          </p>
        </div>
        <hr className="divider"></hr>
        <div className="section">
          <h3>Technologies</h3>
          <p><b>Active work experience</b><br/>
          <Tag text="C#"/>
          <Tag text=".NET"/>
          <Tag text="HTML"/>
          <Tag text="CSS"/>
          <Tag text="JavaScript"/>
          <Tag text="REST API"/>
          <Tag text="SQL"/>
          </p>
          <p><b>Personal projects</b><br/>
          <Tag text="PHP"/>
          <Tag text="WordPress"/>
          <Tag text="Joomla!"/>
          <Tag text="Node.js"/>
          <Tag text="React"/>
          <Tag text="Firebase"/>
          <Tag text="Git"/>
          </p>
          <p><b>Currently learning</b><br/>
          <Tag text="Angular"/>
          <Tag text="NoSQL"/>
          <Tag text="Web Animation"/>
          </p>
        </div>
        <hr className="divider"></hr>
        <div className="section">
          <h3>Experience</h3>
          <div>
            <p><b>Assistant Producer</b><br/>
            <i>The company P<br/>
            Apr 2019 – Present</i></p>
            <p>I'm currently freelancing as the Assistant Producer of College of Wizardry, an international live action roleplaying game set in Czocha Castle, Poland. In a four-day immersive experience, 135 participants and a crew of 30 turn the castle in to a magical college and live the life of its staff and students.</p>
            <p>I have been an active participant in College of Wizardry events since 2015 and joined the crew in 2019. My areas of responsibility include event design, participant management and customer service as well as managing many practical aspects of the production. I also do a lot of copywriting including web content, participant materials and internal guides, and occasionally help our lead developer out with managing the website.<br/>
              <Tag text="WordPress"/>
              <Tag text="WooCommerce"/>
            </p>
          </div>
          <div>
            <p><b>Software Developer</b><br/>
            <i>Polea Oy<br/>
            May 2016 – Sep 2019</i></p>
            <p>I worked as a full stack developer improving the enterprise resource planning software Haulbag and the customizable webshops connected to it. My job was mainly developing the software according to the customers’ needs, and as the only employee in the company I was in charge of many different areas. I also implemented integrations to several other systems. My master’s thesis focused on building a website for one of our customers and how the interfaces of Haulbag and WordPress can be used together to synchronize data between the systems and improve the site's performance.<br/>
              <Tag text="C#"/>
              <Tag text=".NET"/>
              <Tag text="HTML"/>
              <Tag text="CSS"/>
              <Tag text="Sass"/>
              <Tag text="Bootstrap"/>
              <Tag text="JavaScript"/>
              <Tag text="jQuery"/>
              <Tag text="REST API"/>
              <Tag text="SQL"/>
            </p>
          </div>
        </div>
        <hr className="divider"></hr>
        <div className="section">
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