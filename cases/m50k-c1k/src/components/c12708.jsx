import React from 'react';
const LABEL_12708 = 'component_12708';
export function Component12708({ value = 12708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12708, 'data-value': derived.doubled }, children);
}
export default Component12708;
