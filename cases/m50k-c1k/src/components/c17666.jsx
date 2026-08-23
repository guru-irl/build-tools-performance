import React from 'react';
const LABEL_17666 = 'component_17666';
export function Component17666({ value = 17666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17666, 'data-value': derived.doubled }, children);
}
export default Component17666;
