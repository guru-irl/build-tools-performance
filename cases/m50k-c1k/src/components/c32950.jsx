import React from 'react';
const LABEL_32950 = 'component_32950';
export function Component32950({ value = 32950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32950, 'data-value': derived.doubled }, children);
}
export default Component32950;
