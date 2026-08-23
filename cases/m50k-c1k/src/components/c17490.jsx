import React from 'react';
const LABEL_17490 = 'component_17490';
export function Component17490({ value = 17490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17490, 'data-value': derived.doubled }, children);
}
export default Component17490;
