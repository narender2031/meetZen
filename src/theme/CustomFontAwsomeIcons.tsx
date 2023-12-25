import React from 'react';
import AwesomeIcon, {
  FontAwesome6IconProps,
} from 'react-native-vector-icons/FontAwesome6';

export const CustomFontAwsomeIcons: React.FunctionComponent<
  FontAwesome6IconProps
> = (props: FontAwesome6IconProps) => {
  return <AwesomeIcon {...props} />;
};

export default CustomFontAwsomeIcons;
