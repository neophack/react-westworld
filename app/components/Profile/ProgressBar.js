import React from 'react';
import styled from 'styled-components';
import colors from '../../color-scheme';

const Bar = styled.span`
  display: inline-block;
  width: 100px;
  height: 8px;
  position: relative;
  border: 1px solid ${colors.mainTextColorLight};
  background: linear-gradient(
    to right,
    ${colors.mainTextColor} ${({ value }) => value}%,
    transparent ${({ value }) => value}%,
    transparent
  );
  background-repeat: no-repeat;
`;

function ProgressBar({ value }) {
  return (
    <Bar value={value}></Bar>
  );
}

export default ProgressBar;
