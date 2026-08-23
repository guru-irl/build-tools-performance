import React from 'react';
const LABEL_25571 = 'component_25571';
export function Component25571({ value = 25571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25571, 'data-value': derived.doubled }, children);
}
export default Component25571;
