import React from 'react';
const LABEL_12481 = 'component_12481';
export function Component12481({ value = 12481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12481, 'data-value': derived.doubled }, children);
}
export default Component12481;
