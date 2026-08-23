import React from 'react';
const LABEL_17922 = 'component_17922';
export function Component17922({ value = 17922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17922, 'data-value': derived.doubled }, children);
}
export default Component17922;
