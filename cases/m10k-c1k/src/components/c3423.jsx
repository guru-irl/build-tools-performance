import React from 'react';
const LABEL_3423 = 'component_3423';
export function Component3423({ value = 3423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3423, 'data-value': derived.doubled }, children);
}
export default Component3423;
