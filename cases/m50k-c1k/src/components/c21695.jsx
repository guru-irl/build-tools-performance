import React from 'react';
const LABEL_21695 = 'component_21695';
export function Component21695({ value = 21695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21695, 'data-value': derived.doubled }, children);
}
export default Component21695;
