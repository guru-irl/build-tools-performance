import React from 'react';
const LABEL_32368 = 'component_32368';
export function Component32368({ value = 32368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32368, 'data-value': derived.doubled }, children);
}
export default Component32368;
