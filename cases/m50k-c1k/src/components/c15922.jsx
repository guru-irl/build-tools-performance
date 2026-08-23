import React from 'react';
const LABEL_15922 = 'component_15922';
export function Component15922({ value = 15922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15922, 'data-value': derived.doubled }, children);
}
export default Component15922;
