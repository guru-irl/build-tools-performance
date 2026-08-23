import React from 'react';
const LABEL_25535 = 'component_25535';
export function Component25535({ value = 25535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25535, 'data-value': derived.doubled }, children);
}
export default Component25535;
