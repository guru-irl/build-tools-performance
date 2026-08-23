import React from 'react';
const LABEL_21992 = 'component_21992';
export function Component21992({ value = 21992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21992, 'data-value': derived.doubled }, children);
}
export default Component21992;
