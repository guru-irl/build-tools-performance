import React from 'react';
const LABEL_45495 = 'component_45495';
export function Component45495({ value = 45495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45495, 'data-value': derived.doubled }, children);
}
export default Component45495;
