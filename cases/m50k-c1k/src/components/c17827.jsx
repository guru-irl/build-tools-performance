import React from 'react';
const LABEL_17827 = 'component_17827';
export function Component17827({ value = 17827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17827, 'data-value': derived.doubled }, children);
}
export default Component17827;
