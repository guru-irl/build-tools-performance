import React from 'react';
const LABEL_44810 = 'component_44810';
export function Component44810({ value = 44810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44810, 'data-value': derived.doubled }, children);
}
export default Component44810;
