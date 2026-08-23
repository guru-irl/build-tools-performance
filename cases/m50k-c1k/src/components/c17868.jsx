import React from 'react';
const LABEL_17868 = 'component_17868';
export function Component17868({ value = 17868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17868, 'data-value': derived.doubled }, children);
}
export default Component17868;
