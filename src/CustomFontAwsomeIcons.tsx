import React from 'react';
import AwesomeIcon, {
  FontAwesome6IconProps,
} from 'react-native-vector-icons/FontAwesome6';

const CustomFontAwsomeIcons = (
  props: React.JSX.IntrinsicAttributes &
    React.JSX.IntrinsicClassAttributes<AwesomeIcon> &
    Readonly<FontAwesome6IconProps>,
) => {
  return <AwesomeIcon {...props} />;
};

export default CustomFontAwsomeIcons;
