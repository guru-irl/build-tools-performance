import React from 'react';
const LABEL_1922 = 'component_1922';
export function Component1922({ value = 1922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1922, 'data-value': derived.doubled }, children);
}
export default Component1922;
