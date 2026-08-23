import React from 'react';
const LABEL_17705 = 'component_17705';
export function Component17705({ value = 17705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17705, 'data-value': derived.doubled }, children);
}
export default Component17705;
