import React from 'react';
const LABEL_39575 = 'component_39575';
export function Component39575({ value = 39575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39575, 'data-value': derived.doubled }, children);
}
export default Component39575;
