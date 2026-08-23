import React from 'react';
const LABEL_17546 = 'component_17546';
export function Component17546({ value = 17546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17546, 'data-value': derived.doubled }, children);
}
export default Component17546;
