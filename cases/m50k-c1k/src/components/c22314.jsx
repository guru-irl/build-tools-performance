import React from 'react';
const LABEL_22314 = 'component_22314';
export function Component22314({ value = 22314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22314, 'data-value': derived.doubled }, children);
}
export default Component22314;
