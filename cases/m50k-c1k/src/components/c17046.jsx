import React from 'react';
const LABEL_17046 = 'component_17046';
export function Component17046({ value = 17046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17046, 'data-value': derived.doubled }, children);
}
export default Component17046;
