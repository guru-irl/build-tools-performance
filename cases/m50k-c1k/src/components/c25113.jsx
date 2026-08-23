import React from 'react';
const LABEL_25113 = 'component_25113';
export function Component25113({ value = 25113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25113, 'data-value': derived.doubled }, children);
}
export default Component25113;
