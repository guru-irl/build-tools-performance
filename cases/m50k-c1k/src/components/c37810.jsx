import React from 'react';
const LABEL_37810 = 'component_37810';
export function Component37810({ value = 37810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37810, 'data-value': derived.doubled }, children);
}
export default Component37810;
