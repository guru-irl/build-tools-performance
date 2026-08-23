import React from 'react';
const LABEL_17355 = 'component_17355';
export function Component17355({ value = 17355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17355, 'data-value': derived.doubled }, children);
}
export default Component17355;
