import React from 'react';
const LABEL_17421 = 'component_17421';
export function Component17421({ value = 17421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17421, 'data-value': derived.doubled }, children);
}
export default Component17421;
