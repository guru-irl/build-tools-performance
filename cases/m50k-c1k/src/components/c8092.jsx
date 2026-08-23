import React from 'react';
const LABEL_8092 = 'component_8092';
export function Component8092({ value = 8092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8092, 'data-value': derived.doubled }, children);
}
export default Component8092;
