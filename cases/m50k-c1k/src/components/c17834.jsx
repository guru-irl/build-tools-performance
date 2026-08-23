import React from 'react';
const LABEL_17834 = 'component_17834';
export function Component17834({ value = 17834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17834, 'data-value': derived.doubled }, children);
}
export default Component17834;
