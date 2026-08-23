import React from 'react';
const LABEL_17253 = 'component_17253';
export function Component17253({ value = 17253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17253, 'data-value': derived.doubled }, children);
}
export default Component17253;
