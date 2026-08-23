import React from 'react';
const LABEL_31654 = 'component_31654';
export function Component31654({ value = 31654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31654, 'data-value': derived.doubled }, children);
}
export default Component31654;
