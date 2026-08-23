import React from 'react';
const LABEL_39922 = 'component_39922';
export function Component39922({ value = 39922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39922, 'data-value': derived.doubled }, children);
}
export default Component39922;
