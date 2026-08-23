import React from 'react';
const LABEL_25539 = 'component_25539';
export function Component25539({ value = 25539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25539, 'data-value': derived.doubled }, children);
}
export default Component25539;
