import React from 'react';
const LABEL_922 = 'component_922';
export function Component922({ value = 922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_922, 'data-value': derived.doubled }, children);
}
export default Component922;
