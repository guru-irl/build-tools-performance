import React from 'react';
const LABEL_21536 = 'component_21536';
export function Component21536({ value = 21536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21536, 'data-value': derived.doubled }, children);
}
export default Component21536;
