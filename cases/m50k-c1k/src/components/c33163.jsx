import React from 'react';
const LABEL_33163 = 'component_33163';
export function Component33163({ value = 33163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33163, 'data-value': derived.doubled }, children);
}
export default Component33163;
