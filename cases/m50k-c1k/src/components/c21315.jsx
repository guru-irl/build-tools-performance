import React from 'react';
const LABEL_21315 = 'component_21315';
export function Component21315({ value = 21315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21315, 'data-value': derived.doubled }, children);
}
export default Component21315;
