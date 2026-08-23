import React from 'react';
const LABEL_17287 = 'component_17287';
export function Component17287({ value = 17287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17287, 'data-value': derived.doubled }, children);
}
export default Component17287;
