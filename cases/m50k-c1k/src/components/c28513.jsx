import React from 'react';
const LABEL_28513 = 'component_28513';
export function Component28513({ value = 28513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28513, 'data-value': derived.doubled }, children);
}
export default Component28513;
