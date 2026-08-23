import React from 'react';
const LABEL_29268 = 'component_29268';
export function Component29268({ value = 29268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29268, 'data-value': derived.doubled }, children);
}
export default Component29268;
