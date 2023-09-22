import { Features, FeatureType } from '../../libs/api/lib';
import React from 'react';

export const FeatureFlagsContext = React.createContext<Features>({
  LOGIN_BANK_ID_SAME_DEVICE_WITHOUT_ID: true,
  FOOD_MENU: false,
  CLASS_LIST: true,
});

interface Props {
  features: Features;
  children: React.ReactNode;
}

export const FeatureProvider: React.FC<Props> = props => {
  return (
    <FeatureFlagsContext.Provider value={props.features} {...props}>
      {props.children}
    </FeatureFlagsContext.Provider>
  );
};
