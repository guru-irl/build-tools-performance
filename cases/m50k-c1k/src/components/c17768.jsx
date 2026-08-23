import React from 'react';
const LABEL_17768 = 'component_17768';
export function Component17768({ value = 17768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17768, 'data-value': derived.doubled }, children);
}
export default Component17768;
