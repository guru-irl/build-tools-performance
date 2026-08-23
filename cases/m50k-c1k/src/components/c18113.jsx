import React from 'react';
const LABEL_18113 = 'component_18113';
export function Component18113({ value = 18113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18113, 'data-value': derived.doubled }, children);
}
export default Component18113;
