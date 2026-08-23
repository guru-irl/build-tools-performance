import React from 'react';
const LABEL_17214 = 'component_17214';
export function Component17214({ value = 17214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17214, 'data-value': derived.doubled }, children);
}
export default Component17214;
