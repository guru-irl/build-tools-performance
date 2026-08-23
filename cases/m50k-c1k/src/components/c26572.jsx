import React from 'react';
const LABEL_26572 = 'component_26572';
export function Component26572({ value = 26572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26572, 'data-value': derived.doubled }, children);
}
export default Component26572;
