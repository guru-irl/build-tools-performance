import React from 'react';
const LABEL_23922 = 'component_23922';
export function Component23922({ value = 23922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23922, 'data-value': derived.doubled }, children);
}
export default Component23922;
