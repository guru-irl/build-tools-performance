import React from 'react';
const LABEL_17025 = 'component_17025';
export function Component17025({ value = 17025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17025, 'data-value': derived.doubled }, children);
}
export default Component17025;
