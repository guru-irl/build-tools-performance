import React from 'react';
const LABEL_33199 = 'component_33199';
export function Component33199({ value = 33199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33199, 'data-value': derived.doubled }, children);
}
export default Component33199;
