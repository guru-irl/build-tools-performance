import React from 'react';
const LABEL_17597 = 'component_17597';
export function Component17597({ value = 17597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17597, 'data-value': derived.doubled }, children);
}
export default Component17597;
