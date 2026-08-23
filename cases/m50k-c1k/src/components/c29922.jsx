import React from 'react';
const LABEL_29922 = 'component_29922';
export function Component29922({ value = 29922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29922, 'data-value': derived.doubled }, children);
}
export default Component29922;
