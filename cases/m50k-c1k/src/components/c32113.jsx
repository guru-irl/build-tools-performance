import React from 'react';
const LABEL_32113 = 'component_32113';
export function Component32113({ value = 32113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32113, 'data-value': derived.doubled }, children);
}
export default Component32113;
