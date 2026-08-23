import React from 'react';
const LABEL_17933 = 'component_17933';
export function Component17933({ value = 17933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17933, 'data-value': derived.doubled }, children);
}
export default Component17933;
