import React from 'react';
const LABEL_17500 = 'component_17500';
export function Component17500({ value = 17500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17500, 'data-value': derived.doubled }, children);
}
export default Component17500;
