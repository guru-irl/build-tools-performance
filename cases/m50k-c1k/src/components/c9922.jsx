import React from 'react';
const LABEL_9922 = 'component_9922';
export function Component9922({ value = 9922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9922, 'data-value': derived.doubled }, children);
}
export default Component9922;
