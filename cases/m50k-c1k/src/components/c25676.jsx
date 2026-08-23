import React from 'react';
const LABEL_25676 = 'component_25676';
export function Component25676({ value = 25676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25676, 'data-value': derived.doubled }, children);
}
export default Component25676;
