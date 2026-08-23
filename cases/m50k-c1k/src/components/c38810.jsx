import React from 'react';
const LABEL_38810 = 'component_38810';
export function Component38810({ value = 38810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38810, 'data-value': derived.doubled }, children);
}
export default Component38810;
