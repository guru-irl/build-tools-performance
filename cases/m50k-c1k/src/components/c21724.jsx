import React from 'react';
const LABEL_21724 = 'component_21724';
export function Component21724({ value = 21724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21724, 'data-value': derived.doubled }, children);
}
export default Component21724;
