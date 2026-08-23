import React from 'react';
const LABEL_16497 = 'component_16497';
export function Component16497({ value = 16497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16497, 'data-value': derived.doubled }, children);
}
export default Component16497;
