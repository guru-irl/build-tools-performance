import React from 'react';
const LABEL_26113 = 'component_26113';
export function Component26113({ value = 26113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26113, 'data-value': derived.doubled }, children);
}
export default Component26113;
