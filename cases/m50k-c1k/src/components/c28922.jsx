import React from 'react';
const LABEL_28922 = 'component_28922';
export function Component28922({ value = 28922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28922, 'data-value': derived.doubled }, children);
}
export default Component28922;
