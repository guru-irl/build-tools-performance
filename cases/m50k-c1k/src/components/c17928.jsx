import React from 'react';
const LABEL_17928 = 'component_17928';
export function Component17928({ value = 17928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17928, 'data-value': derived.doubled }, children);
}
export default Component17928;
