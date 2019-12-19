/**
 *
 * Checkbox
 *
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';

import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const Checkbox = styled.input`
  cursor: pointer;
  margin: 0;
  position: relative;
  width: ${sizes.checkbox.width};
  font-weight: ${sizes.checkbox.fontWeight};
  &:focus,
  &:active {
    outline: 0;
  }
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: calc(-${sizes.checkbox.width} / 2);
    width: ${sizes.checkbox.width};
    height: ${sizes.checkbox.height};
    border: 1px solid rgba(16, 22, 34, 0.15);
    background-color: #fdfdfd;
    border-radius: 3px;
    box-sizing: border-box;
  }
  &:after {
    display: none;
    content: '\f00c';
    font-family: 'FontAwesome';
    position: absolute;
    left: 0px;
    top: 55%;
    margin-top: calc(-${sizes.checkbox.width} / 2);
    width: ${sizes.checkbox.width};
    height: ${sizes.checkbox.height};
    text-align: center;
    font-size: 9px;
    font-weight: 400;
    color: ${colors.darkBlue};
    line-height: ${sizes.checkbox.height};
  }
  &:checked {
    &:after {
      display: block;
    }
  }

  ${({ someChecked }) => {
    if (someChecked) {
      return `
        &:after {
          content: '\f068';
          position: absolute;
          display: block;
          top: 50%;
          left: 0px;
          font-size: 10px;
          font-family: 'FontAwesome';
          font-weight: 100;
          color: #1c5de7;
        }
      `;
    }

    return '';
  }}

  &:disabled {
    background-color: ${colors.greyIconBkgd};
    cursor: initial;
  }
  & + label {
    display: inline-block;
    font-weight: ${sizes.input.fontWeight};
    font-size: ${sizes.input.fontSize};
  }
`;

Checkbox.defaultProps = {
  someChecked: false,
  type: 'checkbox',
};

Checkbox.propTypes = {
  someChecked: PropTypes.bool,
  type: PropTypes.string,
};

export default Checkbox;
