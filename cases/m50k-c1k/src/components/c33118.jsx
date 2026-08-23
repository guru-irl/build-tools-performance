import React from 'react';
const LABEL_33118 = 'component_33118';
export function Component33118({ value = 33118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33118, 'data-value': derived.doubled }, children);
}
export default Component33118;
