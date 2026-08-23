import React from 'react';
const LABEL_23548 = 'component_23548';
export function Component23548({ value = 23548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23548, 'data-value': derived.doubled }, children);
}
export default Component23548;
