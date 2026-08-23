import React from 'react';
const LABEL_33623 = 'component_33623';
export function Component33623({ value = 33623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33623, 'data-value': derived.doubled }, children);
}
export default Component33623;
