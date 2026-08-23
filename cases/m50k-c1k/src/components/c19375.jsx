import React from 'react';
const LABEL_19375 = 'component_19375';
export function Component19375({ value = 19375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19375, 'data-value': derived.doubled }, children);
}
export default Component19375;
