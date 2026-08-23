import React from 'react';
const LABEL_6601 = 'component_6601';
export function Component6601({ value = 6601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6601, 'data-value': derived.doubled }, children);
}
export default Component6601;
