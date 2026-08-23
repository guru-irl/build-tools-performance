import React from 'react';
const LABEL_32389 = 'component_32389';
export function Component32389({ value = 32389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32389, 'data-value': derived.doubled }, children);
}
export default Component32389;
