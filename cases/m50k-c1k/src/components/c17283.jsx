import React from 'react';
const LABEL_17283 = 'component_17283';
export function Component17283({ value = 17283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17283, 'data-value': derived.doubled }, children);
}
export default Component17283;
