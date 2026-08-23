import React from 'react';
const LABEL_17469 = 'component_17469';
export function Component17469({ value = 17469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17469, 'data-value': derived.doubled }, children);
}
export default Component17469;
