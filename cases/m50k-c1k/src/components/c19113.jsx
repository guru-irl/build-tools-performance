import React from 'react';
const LABEL_19113 = 'component_19113';
export function Component19113({ value = 19113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19113, 'data-value': derived.doubled }, children);
}
export default Component19113;
