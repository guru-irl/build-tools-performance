import React from 'react';
const LABEL_40572 = 'component_40572';
export function Component40572({ value = 40572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40572, 'data-value': derived.doubled }, children);
}
export default Component40572;
