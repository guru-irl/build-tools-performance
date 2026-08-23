import React from 'react';
const LABEL_17992 = 'component_17992';
export function Component17992({ value = 17992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17992, 'data-value': derived.doubled }, children);
}
export default Component17992;
