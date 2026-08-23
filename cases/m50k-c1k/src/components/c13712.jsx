import React from 'react';
const LABEL_13712 = 'component_13712';
export function Component13712({ value = 13712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13712, 'data-value': derived.doubled }, children);
}
export default Component13712;
