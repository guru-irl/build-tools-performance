import React from 'react';
const LABEL_13810 = 'component_13810';
export function Component13810({ value = 13810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13810, 'data-value': derived.doubled }, children);
}
export default Component13810;
