import React from 'react';
const LABEL_17442 = 'component_17442';
export function Component17442({ value = 17442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17442, 'data-value': derived.doubled }, children);
}
export default Component17442;
