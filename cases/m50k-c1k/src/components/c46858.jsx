import React from 'react';
const LABEL_46858 = 'component_46858';
export function Component46858({ value = 46858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46858, 'data-value': derived.doubled }, children);
}
export default Component46858;
