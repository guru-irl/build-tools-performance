import React from 'react';
const LABEL_10511 = 'component_10511';
export function Component10511({ value = 10511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10511, 'data-value': derived.doubled }, children);
}
export default Component10511;
