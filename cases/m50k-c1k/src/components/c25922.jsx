import React from 'react';
const LABEL_25922 = 'component_25922';
export function Component25922({ value = 25922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25922, 'data-value': derived.doubled }, children);
}
export default Component25922;
