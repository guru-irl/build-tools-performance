import React from 'react';
const LABEL_17818 = 'component_17818';
export function Component17818({ value = 17818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17818, 'data-value': derived.doubled }, children);
}
export default Component17818;
