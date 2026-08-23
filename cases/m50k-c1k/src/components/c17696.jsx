import React from 'react';
const LABEL_17696 = 'component_17696';
export function Component17696({ value = 17696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17696, 'data-value': derived.doubled }, children);
}
export default Component17696;
