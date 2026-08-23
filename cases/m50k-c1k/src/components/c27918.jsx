import React from 'react';
const LABEL_27918 = 'component_27918';
export function Component27918({ value = 27918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27918, 'data-value': derived.doubled }, children);
}
export default Component27918;
