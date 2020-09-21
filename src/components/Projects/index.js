import React, { Component } from 'react';
 
class Projects extends Component {
  render() {
    return (
      <div class="contentbox">
        <h1 class="centered">Projects</h1>
        <div class="section">
          <a href="https://www.pokemonsuomi.net"><h3>Pokémon Suomi</h3></a>
          <p>For many years I've been coordinating the Finnish Pokémon tournament scene, and we wanted to move from our old forums to a more modern way of sharing official information. I created the site using Joomla, included several plugins and added a lot of customization to a ready-made layout template. I'm still the only administrator and the main content creator of the site.</p>
        </div>
        <div class="section">
          <a href="https://www.norssit.fi/semweb/"><h3>Vanhat Norssit semanttisessa webissä</h3></a>
          <p>As a special project at Aalto University, I created an algorithm to transform a digitized register of over 10000 students and teachers of a Finnish high school “Norssi” into semantic data. The purpose of the algorithm was to clean OCR errors in the data and to extract various pieces of information from the short bios, such as the name of the person, birth place, hobbies, and relatives mentioned. After my part in the project was finished, a searchable website was then created based on my algorithm. A <a href="https://researchportal.helsinki.fi/fi/publications/reassembling-and-enriching-the-life-stories-in-printed-biographic">research paper</a> on the subject was also published.
          </p>
        </div>
        <div class="section">
          <a href="https://kalenteri.larp.fi"><h3>Larp Calendar</h3></a>
          <p>As my project for a Web Development course at Aalto University, I created an event calendar for the Finnish live action roleplaying community to replace the previous, hopelessly outdated calendar. I was the lead developer in a team of three, and remained to maintain the site after the project as well. I was given the Deed of the Year award by Ropecon, the largest roleplaying convention in Finland, for my work. </p>
        </div>
      </div>
    );
  }
}
 
export default Projects;