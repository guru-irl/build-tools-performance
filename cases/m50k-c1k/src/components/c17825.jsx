import React from 'react';
const LABEL_17825 = 'component_17825';
export function Component17825({ value = 17825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17825, 'data-value': derived.doubled }, children);
}
export default Component17825;
