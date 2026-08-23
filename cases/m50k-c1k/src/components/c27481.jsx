import React from 'react';
const LABEL_27481 = 'component_27481';
export function Component27481({ value = 27481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27481, 'data-value': derived.doubled }, children);
}
export default Component27481;
