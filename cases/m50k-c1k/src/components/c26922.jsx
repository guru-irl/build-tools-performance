import React from 'react';
const LABEL_26922 = 'component_26922';
export function Component26922({ value = 26922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26922, 'data-value': derived.doubled }, children);
}
export default Component26922;
