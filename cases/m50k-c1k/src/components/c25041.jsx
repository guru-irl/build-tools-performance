import React from 'react';
const LABEL_25041 = 'component_25041';
export function Component25041({ value = 25041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25041, 'data-value': derived.doubled }, children);
}
export default Component25041;
