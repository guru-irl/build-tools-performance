import React from 'react';
const LABEL_7922 = 'component_7922';
export function Component7922({ value = 7922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7922, 'data-value': derived.doubled }, children);
}
export default Component7922;
