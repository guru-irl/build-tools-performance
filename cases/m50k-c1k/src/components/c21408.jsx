import React from 'react';
const LABEL_21408 = 'component_21408';
export function Component21408({ value = 21408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21408, 'data-value': derived.doubled }, children);
}
export default Component21408;
