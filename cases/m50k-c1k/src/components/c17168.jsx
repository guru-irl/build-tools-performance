import React from 'react';
const LABEL_17168 = 'component_17168';
export function Component17168({ value = 17168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17168, 'data-value': derived.doubled }, children);
}
export default Component17168;
