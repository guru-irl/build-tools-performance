import React from 'react';
const LABEL_18762 = 'component_18762';
export function Component18762({ value = 18762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18762, 'data-value': derived.doubled }, children);
}
export default Component18762;
