import React from 'react';
const LABEL_32513 = 'component_32513';
export function Component32513({ value = 32513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32513, 'data-value': derived.doubled }, children);
}
export default Component32513;
