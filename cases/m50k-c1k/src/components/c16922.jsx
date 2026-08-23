import React from 'react';
const LABEL_16922 = 'component_16922';
export function Component16922({ value = 16922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16922, 'data-value': derived.doubled }, children);
}
export default Component16922;
