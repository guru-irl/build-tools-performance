import React from 'react';
const LABEL_23094 = 'component_23094';
export function Component23094({ value = 23094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23094, 'data-value': derived.doubled }, children);
}
export default Component23094;
