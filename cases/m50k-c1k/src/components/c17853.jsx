import React from 'react';
const LABEL_17853 = 'component_17853';
export function Component17853({ value = 17853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17853, 'data-value': derived.doubled }, children);
}
export default Component17853;
