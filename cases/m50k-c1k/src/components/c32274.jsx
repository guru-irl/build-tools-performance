import React from 'react';
const LABEL_32274 = 'component_32274';
export function Component32274({ value = 32274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32274, 'data-value': derived.doubled }, children);
}
export default Component32274;
