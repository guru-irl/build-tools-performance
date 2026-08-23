import React from 'react';
const LABEL_13495 = 'component_13495';
export function Component13495({ value = 13495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13495, 'data-value': derived.doubled }, children);
}
export default Component13495;
