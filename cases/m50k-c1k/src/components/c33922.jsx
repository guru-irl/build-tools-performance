import React from 'react';
const LABEL_33922 = 'component_33922';
export function Component33922({ value = 33922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33922, 'data-value': derived.doubled }, children);
}
export default Component33922;
