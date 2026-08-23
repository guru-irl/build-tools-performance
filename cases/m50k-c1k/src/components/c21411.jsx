import React from 'react';
const LABEL_21411 = 'component_21411';
export function Component21411({ value = 21411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21411, 'data-value': derived.doubled }, children);
}
export default Component21411;
