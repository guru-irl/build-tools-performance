import React from 'react';
const LABEL_113 = 'component_113';
export function Component113({ value = 113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_113, 'data-value': derived.doubled }, children);
}
export default Component113;
