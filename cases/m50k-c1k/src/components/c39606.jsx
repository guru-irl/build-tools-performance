import React from 'react';
const LABEL_39606 = 'component_39606';
export function Component39606({ value = 39606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39606, 'data-value': derived.doubled }, children);
}
export default Component39606;
