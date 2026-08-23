import React from 'react';
const LABEL_23132 = 'component_23132';
export function Component23132({ value = 23132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23132, 'data-value': derived.doubled }, children);
}
export default Component23132;
