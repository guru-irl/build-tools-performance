import React from 'react';
const LABEL_23891 = 'component_23891';
export function Component23891({ value = 23891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23891, 'data-value': derived.doubled }, children);
}
export default Component23891;
