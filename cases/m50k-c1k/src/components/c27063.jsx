import React from 'react';
const LABEL_27063 = 'component_27063';
export function Component27063({ value = 27063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27063, 'data-value': derived.doubled }, children);
}
export default Component27063;
