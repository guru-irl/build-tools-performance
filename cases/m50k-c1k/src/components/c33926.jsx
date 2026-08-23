import React from 'react';
const LABEL_33926 = 'component_33926';
export function Component33926({ value = 33926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33926, 'data-value': derived.doubled }, children);
}
export default Component33926;
