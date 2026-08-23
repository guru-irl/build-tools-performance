import React from 'react';
const LABEL_29712 = 'component_29712';
export function Component29712({ value = 29712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29712, 'data-value': derived.doubled }, children);
}
export default Component29712;
