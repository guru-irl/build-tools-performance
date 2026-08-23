import React from 'react';
const LABEL_32475 = 'component_32475';
export function Component32475({ value = 32475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32475, 'data-value': derived.doubled }, children);
}
export default Component32475;
