import React from 'react';
const LABEL_29213 = 'component_29213';
export function Component29213({ value = 29213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29213, 'data-value': derived.doubled }, children);
}
export default Component29213;
