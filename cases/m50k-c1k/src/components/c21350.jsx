import React from 'react';
const LABEL_21350 = 'component_21350';
export function Component21350({ value = 21350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21350, 'data-value': derived.doubled }, children);
}
export default Component21350;
