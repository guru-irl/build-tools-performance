import React from 'react';
const LABEL_20614 = 'component_20614';
export function Component20614({ value = 20614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20614, 'data-value': derived.doubled }, children);
}
export default Component20614;
