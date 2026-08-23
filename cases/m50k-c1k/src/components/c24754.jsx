import React from 'react';
const LABEL_24754 = 'component_24754';
export function Component24754({ value = 24754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24754, 'data-value': derived.doubled }, children);
}
export default Component24754;
