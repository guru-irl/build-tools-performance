import React from 'react';
const LABEL_17824 = 'component_17824';
export function Component17824({ value = 17824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17824, 'data-value': derived.doubled }, children);
}
export default Component17824;
