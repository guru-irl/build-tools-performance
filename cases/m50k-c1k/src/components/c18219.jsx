import React from 'react';
const LABEL_18219 = 'component_18219';
export function Component18219({ value = 18219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18219, 'data-value': derived.doubled }, children);
}
export default Component18219;
