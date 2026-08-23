import React from 'react';
const LABEL_17007 = 'component_17007';
export function Component17007({ value = 17007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17007, 'data-value': derived.doubled }, children);
}
export default Component17007;
