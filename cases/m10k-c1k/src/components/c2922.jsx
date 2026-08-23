import React from 'react';
const LABEL_2922 = 'component_2922';
export function Component2922({ value = 2922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2922, 'data-value': derived.doubled }, children);
}
export default Component2922;
