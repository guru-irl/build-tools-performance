import React from 'react';
const LABEL_39901 = 'component_39901';
export function Component39901({ value = 39901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39901, 'data-value': derived.doubled }, children);
}
export default Component39901;
