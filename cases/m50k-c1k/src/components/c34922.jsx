import React from 'react';
const LABEL_34922 = 'component_34922';
export function Component34922({ value = 34922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34922, 'data-value': derived.doubled }, children);
}
export default Component34922;
