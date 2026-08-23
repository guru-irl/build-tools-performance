import React from 'react';
const LABEL_24922 = 'component_24922';
export function Component24922({ value = 24922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24922, 'data-value': derived.doubled }, children);
}
export default Component24922;
