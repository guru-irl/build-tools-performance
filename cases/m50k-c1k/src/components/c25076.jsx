import React from 'react';
const LABEL_25076 = 'component_25076';
export function Component25076({ value = 25076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25076, 'data-value': derived.doubled }, children);
}
export default Component25076;
