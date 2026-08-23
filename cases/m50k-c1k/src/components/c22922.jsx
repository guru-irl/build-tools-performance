import React from 'react';
const LABEL_22922 = 'component_22922';
export function Component22922({ value = 22922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22922, 'data-value': derived.doubled }, children);
}
export default Component22922;
