import React from 'react';
const LABEL_17482 = 'component_17482';
export function Component17482({ value = 17482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17482, 'data-value': derived.doubled }, children);
}
export default Component17482;
