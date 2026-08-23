import React from 'react';
const LABEL_19810 = 'component_19810';
export function Component19810({ value = 19810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19810, 'data-value': derived.doubled }, children);
}
export default Component19810;
