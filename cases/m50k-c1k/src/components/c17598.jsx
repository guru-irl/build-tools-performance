import React from 'react';
const LABEL_17598 = 'component_17598';
export function Component17598({ value = 17598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17598, 'data-value': derived.doubled }, children);
}
export default Component17598;
