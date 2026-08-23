import React from 'react';
const LABEL_39389 = 'component_39389';
export function Component39389({ value = 39389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39389, 'data-value': derived.doubled }, children);
}
export default Component39389;
