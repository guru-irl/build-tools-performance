import React from 'react';
const LABEL_21454 = 'component_21454';
export function Component21454({ value = 21454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21454, 'data-value': derived.doubled }, children);
}
export default Component21454;
