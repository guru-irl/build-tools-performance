import React from 'react';
const LABEL_21922 = 'component_21922';
export function Component21922({ value = 21922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21922, 'data-value': derived.doubled }, children);
}
export default Component21922;
