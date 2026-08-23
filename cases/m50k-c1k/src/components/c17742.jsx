import React from 'react';
const LABEL_17742 = 'component_17742';
export function Component17742({ value = 17742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17742, 'data-value': derived.doubled }, children);
}
export default Component17742;
