import React from 'react';
const LABEL_17218 = 'component_17218';
export function Component17218({ value = 17218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17218, 'data-value': derived.doubled }, children);
}
export default Component17218;
