import React from 'react';
const LABEL_10708 = 'component_10708';
export function Component10708({ value = 10708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10708, 'data-value': derived.doubled }, children);
}
export default Component10708;
