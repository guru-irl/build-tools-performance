import React from 'react';
const LABEL_25379 = 'component_25379';
export function Component25379({ value = 25379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25379, 'data-value': derived.doubled }, children);
}
export default Component25379;
