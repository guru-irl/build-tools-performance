import React from 'react';
const LABEL_34588 = 'component_34588';
export function Component34588({ value = 34588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34588, 'data-value': derived.doubled }, children);
}
export default Component34588;
