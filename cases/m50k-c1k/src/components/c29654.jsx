import React from 'react';
const LABEL_29654 = 'component_29654';
export function Component29654({ value = 29654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29654, 'data-value': derived.doubled }, children);
}
export default Component29654;
