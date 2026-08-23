import React from 'react';
const LABEL_21237 = 'component_21237';
export function Component21237({ value = 21237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21237, 'data-value': derived.doubled }, children);
}
export default Component21237;
