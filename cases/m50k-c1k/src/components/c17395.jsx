import React from 'react';
const LABEL_17395 = 'component_17395';
export function Component17395({ value = 17395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17395, 'data-value': derived.doubled }, children);
}
export default Component17395;
