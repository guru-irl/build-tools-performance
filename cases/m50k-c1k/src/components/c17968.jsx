import React from 'react';
const LABEL_17968 = 'component_17968';
export function Component17968({ value = 17968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17968, 'data-value': derived.doubled }, children);
}
export default Component17968;
