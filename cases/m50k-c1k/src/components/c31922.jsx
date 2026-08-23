import React from 'react';
const LABEL_31922 = 'component_31922';
export function Component31922({ value = 31922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31922, 'data-value': derived.doubled }, children);
}
export default Component31922;
