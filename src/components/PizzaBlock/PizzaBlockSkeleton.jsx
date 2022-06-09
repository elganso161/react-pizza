import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaBlockSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#e1e0e0"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="139" cy="111" r="110" />
    <rect x="0" y="248" rx="10" ry="10" width="280" height="30" />
    <rect x="0" y="292" rx="10" ry="10" width="280" height="71" />
    <rect x="0" y="387" rx="20" ry="20" width="94" height="37" />
    <rect x="124" y="377" rx="10" ry="10" width="155" height="50" />
  </ContentLoader>
);

export default PizzaBlockSkeleton;
