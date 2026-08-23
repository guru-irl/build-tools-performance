import React from 'react';
const LABEL_35137 = 'component_35137';
export function Component35137({ value = 35137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35137, 'data-value': derived.doubled }, children);
}
export default Component35137;
