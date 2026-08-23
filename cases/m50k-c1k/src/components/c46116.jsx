import React from 'react';
const LABEL_46116 = 'component_46116';
export function Component46116({ value = 46116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46116, 'data-value': derived.doubled }, children);
}
export default Component46116;
