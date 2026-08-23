import React from 'react';
const LABEL_21375 = 'component_21375';
export function Component21375({ value = 21375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21375, 'data-value': derived.doubled }, children);
}
export default Component21375;
