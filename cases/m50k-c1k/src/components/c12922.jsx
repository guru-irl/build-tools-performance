import React from 'react';
const LABEL_12922 = 'component_12922';
export function Component12922({ value = 12922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12922, 'data-value': derived.doubled }, children);
}
export default Component12922;
