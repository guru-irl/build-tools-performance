import React from 'react';
const LABEL_17593 = 'component_17593';
export function Component17593({ value = 17593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17593, 'data-value': derived.doubled }, children);
}
export default Component17593;
