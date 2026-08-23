import React from 'react';
const LABEL_40922 = 'component_40922';
export function Component40922({ value = 40922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40922, 'data-value': derived.doubled }, children);
}
export default Component40922;
