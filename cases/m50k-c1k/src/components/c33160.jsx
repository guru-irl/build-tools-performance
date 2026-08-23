import React from 'react';
const LABEL_33160 = 'component_33160';
export function Component33160({ value = 33160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33160, 'data-value': derived.doubled }, children);
}
export default Component33160;
