import React from 'react';
const LABEL_17596 = 'component_17596';
export function Component17596({ value = 17596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17596, 'data-value': derived.doubled }, children);
}
export default Component17596;
