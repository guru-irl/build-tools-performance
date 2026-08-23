import React from 'react';
const LABEL_3922 = 'component_3922';
export function Component3922({ value = 3922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3922, 'data-value': derived.doubled }, children);
}
export default Component3922;
