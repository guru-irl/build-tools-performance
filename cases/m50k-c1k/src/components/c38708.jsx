import React from 'react';
const LABEL_38708 = 'component_38708';
export function Component38708({ value = 38708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38708, 'data-value': derived.doubled }, children);
}
export default Component38708;
