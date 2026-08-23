import React from 'react';
const LABEL_17830 = 'component_17830';
export function Component17830({ value = 17830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17830, 'data-value': derived.doubled }, children);
}
export default Component17830;
