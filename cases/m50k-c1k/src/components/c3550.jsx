import React from 'react';
const LABEL_3550 = 'component_3550';
export function Component3550({ value = 3550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3550, 'data-value': derived.doubled }, children);
}
export default Component3550;
