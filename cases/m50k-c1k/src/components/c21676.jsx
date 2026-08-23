import React from 'react';
const LABEL_21676 = 'component_21676';
export function Component21676({ value = 21676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21676, 'data-value': derived.doubled }, children);
}
export default Component21676;
