import React from 'react';
const LABEL_33712 = 'component_33712';
export function Component33712({ value = 33712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33712, 'data-value': derived.doubled }, children);
}
export default Component33712;
