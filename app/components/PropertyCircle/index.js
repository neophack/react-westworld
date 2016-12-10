/**
*
* PropertyCircle
*
*/

import React from 'react';
import styled from 'styled-components';
import colors from '../../color-scheme';
import propertyCircleFactory from './factory';

function small() {
  const CIRCLE_RADIUS = 200;
  const MINI_PROGRESS_LENGTH = 100;
  const BUBBLE_RADIUS = 10;
  const INNEST_CIRCLE_BORDER_WIDTH = 4;
  const CONTAINER_RADIUS = CIRCLE_RADIUS + BUBBLE_RADIUS * 2 + MINI_PROGRESS_LENGTH * 2;
  return {
    CIRCLE_RADIUS,
    MINI_PROGRESS_LENGTH,
    BUBBLE_RADIUS,
    INNEST_CIRCLE_BORDER_WIDTH,
    CONTAINER_RADIUS,
  };
}

function large() {
  const CIRCLE_RADIUS = 500;
  const MINI_PROGRESS_LENGTH = 100;
  const BUBBLE_RADIUS = 10;
  const INNEST_CIRCLE_BORDER_WIDTH = 4;
  const CONTAINER_RADIUS = CIRCLE_RADIUS + BUBBLE_RADIUS * 2 + MINI_PROGRESS_LENGTH * 2;
  return {
    CIRCLE_RADIUS,
    MINI_PROGRESS_LENGTH,
    BUBBLE_RADIUS,
    INNEST_CIRCLE_BORDER_WIDTH,
    CONTAINER_RADIUS,
  };
}

const InnerCircle = propertyCircleFactory(small());
const OutterCircle = propertyCircleFactory(large());

const InnerCircleWrapper = styled.div`
  margin-top: ${(large().CIRCLE_RADIUS - small().CIRCLE_RADIUS) / 2}px;
  margin-left: ${(large().CIRCLE_RADIUS - small().CIRCLE_RADIUS) / 2}px;
`;

const DoublePropertyCircleLayout = styled.div`
  position: relative;
  & > * {
    position: absolute;
  }
`;

function DoublePropertyCircle({properties}) {
  return (
    <DoublePropertyCircleLayout>
      <InnerCircleWrapper>
        <InnerCircle properties={properties.slice(0, properties.length / 2)} />
      </InnerCircleWrapper>
      <OutterCircle properties={properties.slice(properties.length / 2, properties.length)} />
    </DoublePropertyCircleLayout>
  );
}

export default DoublePropertyCircle;
