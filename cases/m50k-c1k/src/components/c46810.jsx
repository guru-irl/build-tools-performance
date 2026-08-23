import React from 'react';
const LABEL_46810 = 'component_46810';
export function Component46810({ value = 46810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46810, 'data-value': derived.doubled }, children);
}
export default Component46810;
