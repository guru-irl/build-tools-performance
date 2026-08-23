import React from 'react';
const LABEL_33117 = 'component_33117';
export function Component33117({ value = 33117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33117, 'data-value': derived.doubled }, children);
}
export default Component33117;
