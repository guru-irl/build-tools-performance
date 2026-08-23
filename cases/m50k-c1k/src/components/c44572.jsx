import React from 'react';
const LABEL_44572 = 'component_44572';
export function Component44572({ value = 44572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44572, 'data-value': derived.doubled }, children);
}
export default Component44572;
