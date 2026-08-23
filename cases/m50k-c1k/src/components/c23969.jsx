import React from 'react';
const LABEL_23969 = 'component_23969';
export function Component23969({ value = 23969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23969, 'data-value': derived.doubled }, children);
}
export default Component23969;
