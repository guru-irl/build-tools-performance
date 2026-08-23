import React from 'react';
const LABEL_3991 = 'component_3991';
export function Component3991({ value = 3991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3991, 'data-value': derived.doubled }, children);
}
export default Component3991;
