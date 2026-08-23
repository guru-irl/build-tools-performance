import React from 'react';
const LABEL_20922 = 'component_20922';
export function Component20922({ value = 20922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20922, 'data-value': derived.doubled }, children);
}
export default Component20922;
