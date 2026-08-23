import React from 'react';
const LABEL_17091 = 'component_17091';
export function Component17091({ value = 17091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17091, 'data-value': derived.doubled }, children);
}
export default Component17091;
