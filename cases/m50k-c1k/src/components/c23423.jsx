import React from 'react';
const LABEL_23423 = 'component_23423';
export function Component23423({ value = 23423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23423, 'data-value': derived.doubled }, children);
}
export default Component23423;
