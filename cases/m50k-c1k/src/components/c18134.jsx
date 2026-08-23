import React from 'react';
const LABEL_18134 = 'component_18134';
export function Component18134({ value = 18134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18134, 'data-value': derived.doubled }, children);
}
export default Component18134;
