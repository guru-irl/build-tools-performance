import React from 'react';
const LABEL_17857 = 'component_17857';
export function Component17857({ value = 17857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17857, 'data-value': derived.doubled }, children);
}
export default Component17857;
