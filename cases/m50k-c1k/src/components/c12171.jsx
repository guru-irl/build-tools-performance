import React from 'react';
const LABEL_12171 = 'component_12171';
export function Component12171({ value = 12171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12171, 'data-value': derived.doubled }, children);
}
export default Component12171;
