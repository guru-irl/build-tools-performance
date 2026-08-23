import React from 'react';
const LABEL_12712 = 'component_12712';
export function Component12712({ value = 12712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12712, 'data-value': derived.doubled }, children);
}
export default Component12712;
