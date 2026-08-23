import React from 'react';
const LABEL_13922 = 'component_13922';
export function Component13922({ value = 13922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13922, 'data-value': derived.doubled }, children);
}
export default Component13922;
