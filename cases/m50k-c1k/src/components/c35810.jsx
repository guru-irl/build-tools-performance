import React from 'react';
const LABEL_35810 = 'component_35810';
export function Component35810({ value = 35810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35810, 'data-value': derived.doubled }, children);
}
export default Component35810;
