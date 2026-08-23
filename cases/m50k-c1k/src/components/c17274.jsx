import React from 'react';
const LABEL_17274 = 'component_17274';
export function Component17274({ value = 17274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17274, 'data-value': derived.doubled }, children);
}
export default Component17274;
