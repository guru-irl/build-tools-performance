import React from 'react';
const LABEL_17372 = 'component_17372';
export function Component17372({ value = 17372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17372, 'data-value': derived.doubled }, children);
}
export default Component17372;
