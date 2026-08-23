import React from 'react';
const LABEL_32654 = 'component_32654';
export function Component32654({ value = 32654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32654, 'data-value': derived.doubled }, children);
}
export default Component32654;
