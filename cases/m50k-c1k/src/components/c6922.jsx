import React from 'react';
const LABEL_6922 = 'component_6922';
export function Component6922({ value = 6922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6922, 'data-value': derived.doubled }, children);
}
export default Component6922;
