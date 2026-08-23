import React from 'react';
const LABEL_23117 = 'component_23117';
export function Component23117({ value = 23117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23117, 'data-value': derived.doubled }, children);
}
export default Component23117;
