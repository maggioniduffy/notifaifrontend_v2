import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

const typographyVariant = {
  bold: `bold`,
  italic: `italic`,
  light: 'light',
  medium: `medium`,
  regular: `regular`,
};

const getTextStyle = ({ align, color, size, variant = 'regular',}) => {
  const textStyle = {
    color,
    fontFamily: typographyVariant[variant] || 'regular',
    fontSize: size,
    textAlign: align,
  };
  return textStyle;
};

const Typography = ({ align, children, color, size, variant = 'regular' }) => {
  const textStyle = getTextStyle({ align, color, size, variant });
  return (
    <Text allowFontScaling={false} style={[styles.text, textStyle]}>
      {children}
    </Text>
  );
};

Typography.defaultProps = {
  align: 'left',
  color: '#00000F',
  size: 14,
  variant: 'regular',
};

export default Typography;