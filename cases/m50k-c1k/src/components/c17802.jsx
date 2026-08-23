import React from 'react';
const LABEL_17802 = 'component_17802';
export function Component17802({ value = 17802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17802, 'data-value': derived.doubled }, children);
}
export default Component17802;
