import React from 'react';
const LABEL_29599 = 'component_29599';
export function Component29599({ value = 29599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29599, 'data-value': derived.doubled }, children);
}
export default Component29599;
