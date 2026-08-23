import React from 'react';
const LABEL_32371 = 'component_32371';
export function Component32371({ value = 32371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32371, 'data-value': derived.doubled }, children);
}
export default Component32371;
