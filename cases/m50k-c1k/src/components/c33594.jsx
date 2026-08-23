import React from 'react';
const LABEL_33594 = 'component_33594';
export function Component33594({ value = 33594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33594, 'data-value': derived.doubled }, children);
}
export default Component33594;
