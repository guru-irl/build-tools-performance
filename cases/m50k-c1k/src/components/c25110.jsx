import React from 'react';
const LABEL_25110 = 'component_25110';
export function Component25110({ value = 25110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25110, 'data-value': derived.doubled }, children);
}
export default Component25110;
