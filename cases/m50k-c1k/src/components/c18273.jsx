import React from 'react';
const LABEL_18273 = 'component_18273';
export function Component18273({ value = 18273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18273, 'data-value': derived.doubled }, children);
}
export default Component18273;
