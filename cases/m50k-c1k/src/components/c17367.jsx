import React from 'react';
const LABEL_17367 = 'component_17367';
export function Component17367({ value = 17367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17367, 'data-value': derived.doubled }, children);
}
export default Component17367;
