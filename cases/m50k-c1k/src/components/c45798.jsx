import React from 'react';
const LABEL_45798 = 'component_45798';
export function Component45798({ value = 45798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45798, 'data-value': derived.doubled }, children);
}
export default Component45798;
