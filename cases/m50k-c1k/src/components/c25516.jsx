import React from 'react';
const LABEL_25516 = 'component_25516';
export function Component25516({ value = 25516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25516, 'data-value': derived.doubled }, children);
}
export default Component25516;
