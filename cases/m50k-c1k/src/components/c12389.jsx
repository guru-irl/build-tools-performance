import React from 'react';
const LABEL_12389 = 'component_12389';
export function Component12389({ value = 12389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12389, 'data-value': derived.doubled }, children);
}
export default Component12389;
