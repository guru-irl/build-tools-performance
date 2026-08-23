import React from 'react';
const LABEL_23004 = 'component_23004';
export function Component23004({ value = 23004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23004, 'data-value': derived.doubled }, children);
}
export default Component23004;
