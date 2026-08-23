import React from 'react';
const LABEL_21496 = 'component_21496';
export function Component21496({ value = 21496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21496, 'data-value': derived.doubled }, children);
}
export default Component21496;
