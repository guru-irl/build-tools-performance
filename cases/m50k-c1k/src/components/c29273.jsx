import React from 'react';
const LABEL_29273 = 'component_29273';
export function Component29273({ value = 29273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29273, 'data-value': derived.doubled }, children);
}
export default Component29273;
