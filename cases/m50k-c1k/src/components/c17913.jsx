import React from 'react';
const LABEL_17913 = 'component_17913';
export function Component17913({ value = 17913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17913, 'data-value': derived.doubled }, children);
}
export default Component17913;
