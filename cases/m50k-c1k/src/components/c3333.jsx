import React from 'react';
const LABEL_3333 = 'component_3333';
export function Component3333({ value = 3333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3333, 'data-value': derived.doubled }, children);
}
export default Component3333;
