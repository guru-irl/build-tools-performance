import React from 'react';
const LABEL_17979 = 'component_17979';
export function Component17979({ value = 17979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17979, 'data-value': derived.doubled }, children);
}
export default Component17979;
