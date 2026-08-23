import React from 'react';
const LABEL_17667 = 'component_17667';
export function Component17667({ value = 17667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17667, 'data-value': derived.doubled }, children);
}
export default Component17667;
