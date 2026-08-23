import React from 'react';
const LABEL_25572 = 'component_25572';
export function Component25572({ value = 25572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25572, 'data-value': derived.doubled }, children);
}
export default Component25572;
