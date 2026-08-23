import React from 'react';
const LABEL_17041 = 'component_17041';
export function Component17041({ value = 17041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17041, 'data-value': derived.doubled }, children);
}
export default Component17041;
