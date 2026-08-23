import React from 'react';
const LABEL_31707 = 'component_31707';
export function Component31707({ value = 31707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31707, 'data-value': derived.doubled }, children);
}
export default Component31707;
