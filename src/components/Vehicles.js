import React, { Component } from 'react';
import carWhite from '../images/car--white.svg';
import carOrange from '../images/car--orange.svg';
import truckBrown from '../images/truck--brown.svg';
import vanGray from '../images/van--gray.svg';
import carBlack from '../images/car--black.svg';

class Vehicles extends Component {
  render() {
    return (
      <div className="world--vehicle-container">
        <object type="image/svg+xml"
          aria-label="White Car"
          data={carWhite}
          className="world--vehicle world--vehicle--drive-left-1" />
        <object type="image/svg+xml"
          aria-label="Orange Car"
          data={carOrange}
          className="world--vehicle world--vehicle--drive-left-2" />
        <object type="image/svg+xml"
          aria-label="Truck Brown"
          data={truckBrown}
          className="world--vehicle world--vehicle--drive-right-1" />
        <object type="image/svg+xml"
          aria-label="Orange Car"
          data={vanGray}
          className="world--vehicle world--vehicle--drive-right-2" />
        <object type="image/svg+xml"
          aria-label="Black Car"
          data={carBlack}
          className="world--vehicle world--vehicle--drive-right-3" />
      </div>
    );
  }
}

export default Vehicles;