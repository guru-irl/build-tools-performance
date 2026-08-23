import React from 'react';
const LABEL_17590 = 'component_17590';
export function Component17590({ value = 17590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17590, 'data-value': derived.doubled }, children);
}
export default Component17590;
