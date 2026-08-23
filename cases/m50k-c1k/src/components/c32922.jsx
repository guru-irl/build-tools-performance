import React from 'react';
const LABEL_32922 = 'component_32922';
export function Component32922({ value = 32922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32922, 'data-value': derived.doubled }, children);
}
export default Component32922;
