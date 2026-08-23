import React from 'react';
const LABEL_44453 = 'component_44453';
export function Component44453({ value = 44453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44453, 'data-value': derived.doubled }, children);
}
export default Component44453;
