import React from 'react';
const LABEL_23712 = 'component_23712';
export function Component23712({ value = 23712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23712, 'data-value': derived.doubled }, children);
}
export default Component23712;
