import React from 'react';
const LABEL_27650 = 'component_27650';
export function Component27650({ value = 27650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27650, 'data-value': derived.doubled }, children);
}
export default Component27650;
