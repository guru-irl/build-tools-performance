import React from 'react';
const LABEL_17101 = 'component_17101';
export function Component17101({ value = 17101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17101, 'data-value': derived.doubled }, children);
}
export default Component17101;
