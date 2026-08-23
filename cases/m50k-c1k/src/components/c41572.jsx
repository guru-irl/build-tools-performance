import React from 'react';
const LABEL_41572 = 'component_41572';
export function Component41572({ value = 41572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41572, 'data-value': derived.doubled }, children);
}
export default Component41572;
