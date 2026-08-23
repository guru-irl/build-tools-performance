import React from 'react';
const LABEL_45654 = 'component_45654';
export function Component45654({ value = 45654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45654, 'data-value': derived.doubled }, children);
}
export default Component45654;
