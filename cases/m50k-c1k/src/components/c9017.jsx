import React from 'react';
const LABEL_9017 = 'component_9017';
export function Component9017({ value = 9017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9017, 'data-value': derived.doubled }, children);
}
export default Component9017;
