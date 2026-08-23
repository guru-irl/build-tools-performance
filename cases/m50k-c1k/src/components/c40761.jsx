import React from 'react';
const LABEL_40761 = 'component_40761';
export function Component40761({ value = 40761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40761, 'data-value': derived.doubled }, children);
}
export default Component40761;
