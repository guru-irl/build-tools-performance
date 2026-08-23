import React from 'react';
const LABEL_23885 = 'component_23885';
export function Component23885({ value = 23885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23885, 'data-value': derived.doubled }, children);
}
export default Component23885;
