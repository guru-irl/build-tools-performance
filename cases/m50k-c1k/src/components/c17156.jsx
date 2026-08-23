import React from 'react';
const LABEL_17156 = 'component_17156';
export function Component17156({ value = 17156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17156, 'data-value': derived.doubled }, children);
}
export default Component17156;
