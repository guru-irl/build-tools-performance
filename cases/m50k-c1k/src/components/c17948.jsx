import React from 'react';
const LABEL_17948 = 'component_17948';
export function Component17948({ value = 17948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17948, 'data-value': derived.doubled }, children);
}
export default Component17948;
