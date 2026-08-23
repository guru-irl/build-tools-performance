import React from 'react';
const LABEL_30572 = 'component_30572';
export function Component30572({ value = 30572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30572, 'data-value': derived.doubled }, children);
}
export default Component30572;
