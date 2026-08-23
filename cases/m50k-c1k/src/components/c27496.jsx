import React from 'react';
const LABEL_27496 = 'component_27496';
export function Component27496({ value = 27496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27496, 'data-value': derived.doubled }, children);
}
export default Component27496;
