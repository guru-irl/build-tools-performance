import React from 'react';
const LABEL_17961 = 'component_17961';
export function Component17961({ value = 17961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17961, 'data-value': derived.doubled }, children);
}
export default Component17961;
