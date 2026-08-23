import React from 'react';
const LABEL_18922 = 'component_18922';
export function Component18922({ value = 18922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18922, 'data-value': derived.doubled }, children);
}
export default Component18922;
