import React from 'react';
const LABEL_17252 = 'component_17252';
export function Component17252({ value = 17252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17252, 'data-value': derived.doubled }, children);
}
export default Component17252;
