import React from 'react';
const LABEL_17710 = 'component_17710';
export function Component17710({ value = 17710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17710, 'data-value': derived.doubled }, children);
}
export default Component17710;
