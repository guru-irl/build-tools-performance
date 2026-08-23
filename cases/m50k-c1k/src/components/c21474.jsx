import React from 'react';
const LABEL_21474 = 'component_21474';
export function Component21474({ value = 21474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21474, 'data-value': derived.doubled }, children);
}
export default Component21474;
