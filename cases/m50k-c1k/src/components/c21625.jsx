import React from 'react';
const LABEL_21625 = 'component_21625';
export function Component21625({ value = 21625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21625, 'data-value': derived.doubled }, children);
}
export default Component21625;
