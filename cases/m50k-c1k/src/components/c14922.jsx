import React from 'react';
const LABEL_14922 = 'component_14922';
export function Component14922({ value = 14922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14922, 'data-value': derived.doubled }, children);
}
export default Component14922;
