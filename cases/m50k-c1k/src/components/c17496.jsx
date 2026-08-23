import React from 'react';
const LABEL_17496 = 'component_17496';
export function Component17496({ value = 17496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17496, 'data-value': derived.doubled }, children);
}
export default Component17496;
