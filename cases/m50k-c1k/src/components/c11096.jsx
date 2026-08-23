import React from 'react';
const LABEL_11096 = 'component_11096';
export function Component11096({ value = 11096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11096, 'data-value': derived.doubled }, children);
}
export default Component11096;
