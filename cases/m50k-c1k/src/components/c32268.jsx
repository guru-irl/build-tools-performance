import React from 'react';
const LABEL_32268 = 'component_32268';
export function Component32268({ value = 32268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32268, 'data-value': derived.doubled }, children);
}
export default Component32268;
