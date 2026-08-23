import React from 'react';
const LABEL_2398 = 'component_2398';
export function Component2398({ value = 2398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2398, 'data-value': derived.doubled }, children);
}
export default Component2398;
