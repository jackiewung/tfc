import React from 'react';
import { Link } from 'react-router-dom';

import './Location.scss';

const Location = () =>
  <div className="Location">
    <div className="Location__col2">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.3048913409893!2d-118.13553308498486!3d34.06169768060332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c55da40e07b5%3A0xa98cad447309da25!2sTokyo+Fried+Chicken+Co.!5e0!3m2!1sen!2sus!4v1496867917294" width="600" height="450" frameBorder="0" style={{"border":0, "width": "100%"}} allowFullScreen></iframe>
    </div>
    <div className="Location__col1">
      <h1>Address</h1>
      122 S Atlantic Blvd, Monterey Park, CA 91754

      <br /><br />

      <h1>Hours</h1>
      <table>
        <tr>
          <th>Monday</th>
          <th>Closed</th>
        </tr>
        <tr>
          <th>Tuesday</th>
          <th>Closed</th>
        </tr>
        <tr>
          <th>Wednesday</th>
          <th>5:30pm-10pm</th>
        </tr>
        <tr>
          <th>Thursday</th>
          <th>5:30pm-11pm</th>
        </tr>
        <tr>
          <th>Friday</th>
          <th>5:30pm-11pm</th>
        </tr>
        <tr>
          <th>Saturday</th>
          <th>5:30pm-11pm</th>
        </tr>
        <tr>
          <th>Sunday</th>
          <th>5:30pm-10pm</th>
        </tr>
      </table>

      <div className="Location__notes">
        <strong>*</strong> phones are answered as early as an hour prior to opening for pick-up orders<br /><br />
        <strong>*</strong> last seating and last call for phone orders is 15 minutes before closing
      </div>
    </div>
  </div>

export default Location;
