import React from 'react';
const LABEL_4922 = 'component_4922';
export function Component4922({ value = 4922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4922, 'data-value': derived.doubled }, children);
}
export default Component4922;
