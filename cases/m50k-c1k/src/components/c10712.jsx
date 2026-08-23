import React from 'react';
const LABEL_10712 = 'component_10712';
export function Component10712({ value = 10712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10712, 'data-value': derived.doubled }, children);
}
export default Component10712;
