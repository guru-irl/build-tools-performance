import React from 'react';
const LABEL_17162 = 'component_17162';
export function Component17162({ value = 17162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17162, 'data-value': derived.doubled }, children);
}
export default Component17162;
