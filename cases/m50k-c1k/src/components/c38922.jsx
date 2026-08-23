import React from 'react';
const LABEL_38922 = 'component_38922';
export function Component38922({ value = 38922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38922, 'data-value': derived.doubled }, children);
}
export default Component38922;
