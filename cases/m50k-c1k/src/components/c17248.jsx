import React from 'react';
const LABEL_17248 = 'component_17248';
export function Component17248({ value = 17248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17248, 'data-value': derived.doubled }, children);
}
export default Component17248;
