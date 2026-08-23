import React from 'react';
const LABEL_17327 = 'component_17327';
export function Component17327({ value = 17327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17327, 'data-value': derived.doubled }, children);
}
export default Component17327;
