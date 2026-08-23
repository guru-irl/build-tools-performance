import React from 'react';
const LABEL_17368 = 'component_17368';
export function Component17368({ value = 17368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17368, 'data-value': derived.doubled }, children);
}
export default Component17368;
