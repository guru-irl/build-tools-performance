import React from 'react';
const LABEL_5922 = 'component_5922';
export function Component5922({ value = 5922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5922, 'data-value': derived.doubled }, children);
}
export default Component5922;
