import React from 'react';
const LABEL_25605 = 'component_25605';
export function Component25605({ value = 25605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25605, 'data-value': derived.doubled }, children);
}
export default Component25605;
