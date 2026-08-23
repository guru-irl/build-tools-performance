import React from 'react';
const LABEL_21442 = 'component_21442';
export function Component21442({ value = 21442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21442, 'data-value': derived.doubled }, children);
}
export default Component21442;
