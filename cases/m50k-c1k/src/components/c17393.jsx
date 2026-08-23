import React from 'react';
const LABEL_17393 = 'component_17393';
export function Component17393({ value = 17393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17393, 'data-value': derived.doubled }, children);
}
export default Component17393;
