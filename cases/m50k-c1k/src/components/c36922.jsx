import React from 'react';
const LABEL_36922 = 'component_36922';
export function Component36922({ value = 36922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36922, 'data-value': derived.doubled }, children);
}
export default Component36922;
