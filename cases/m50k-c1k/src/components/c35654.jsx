import React from 'react';
const LABEL_35654 = 'component_35654';
export function Component35654({ value = 35654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35654, 'data-value': derived.doubled }, children);
}
export default Component35654;
