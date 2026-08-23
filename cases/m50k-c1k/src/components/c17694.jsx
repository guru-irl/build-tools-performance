import React from 'react';
const LABEL_17694 = 'component_17694';
export function Component17694({ value = 17694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17694, 'data-value': derived.doubled }, children);
}
export default Component17694;
