import React from 'react';
const LABEL_32140 = 'component_32140';
export function Component32140({ value = 32140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32140, 'data-value': derived.doubled }, children);
}
export default Component32140;
