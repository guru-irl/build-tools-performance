import React from 'react';
const LABEL_20453 = 'component_20453';
export function Component20453({ value = 20453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20453, 'data-value': derived.doubled }, children);
}
export default Component20453;
