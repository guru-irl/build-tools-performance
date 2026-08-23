import React from 'react';
const LABEL_45926 = 'component_45926';
export function Component45926({ value = 45926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45926, 'data-value': derived.doubled }, children);
}
export default Component45926;
