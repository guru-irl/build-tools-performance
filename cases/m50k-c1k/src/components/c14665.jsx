import React from 'react';
const LABEL_14665 = 'component_14665';
export function Component14665({ value = 14665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14665, 'data-value': derived.doubled }, children);
}
export default Component14665;
