import React from 'react';
const LABEL_16268 = 'component_16268';
export function Component16268({ value = 16268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16268, 'data-value': derived.doubled }, children);
}
export default Component16268;
