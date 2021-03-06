/*
 *
 * PropertyCirclePage
 *
 */

import React from 'react';
import { random, shuffle } from 'lodash';
import { connect } from 'react-redux';
import PropertyCircle from '../../components/PropertyCircle';

import { Personality } from '../../corpus';

const properties = shuffle(Personality).slice(0, 94).map((personality) => (
  {
    label: personality,
    percentage: random(0, 100),
    checked: false,
  }
));

const selectedItem = {
  outerLabel: 'amnt:[0]%',
  innerLabel: 'prblty:[0]%',
  title: 'Bulk Apperception',
};

export class PropertyCirclePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <PropertyCircle
          selectedItem={selectedItem}
          properties={properties}
        >
        </PropertyCircle>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(PropertyCirclePage);
