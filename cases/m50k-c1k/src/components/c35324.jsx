import React from 'react';
const LABEL_35324 = 'component_35324';
export function Component35324({ value = 35324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35324, 'data-value': derived.doubled }, children);
}
export default Component35324;
