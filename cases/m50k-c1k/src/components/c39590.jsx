import React from 'react';
const LABEL_39590 = 'component_39590';
export function Component39590({ value = 39590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39590, 'data-value': derived.doubled }, children);
}
export default Component39590;
