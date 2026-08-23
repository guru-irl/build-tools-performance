import React from 'react';
const LABEL_33513 = 'component_33513';
export function Component33513({ value = 33513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33513, 'data-value': derived.doubled }, children);
}
export default Component33513;
