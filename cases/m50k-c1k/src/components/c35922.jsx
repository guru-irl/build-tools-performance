import React from 'react';
const LABEL_35922 = 'component_35922';
export function Component35922({ value = 35922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35922, 'data-value': derived.doubled }, children);
}
export default Component35922;
