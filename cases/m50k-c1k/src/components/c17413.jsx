import React from 'react';
const LABEL_17413 = 'component_17413';
export function Component17413({ value = 17413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17413, 'data-value': derived.doubled }, children);
}
export default Component17413;
