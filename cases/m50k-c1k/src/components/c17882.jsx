import React from 'react';
const LABEL_17882 = 'component_17882';
export function Component17882({ value = 17882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17882, 'data-value': derived.doubled }, children);
}
export default Component17882;
