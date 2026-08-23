import React from 'react';
const LABEL_45032 = 'component_45032';
export function Component45032({ value = 45032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45032, 'data-value': derived.doubled }, children);
}
export default Component45032;
