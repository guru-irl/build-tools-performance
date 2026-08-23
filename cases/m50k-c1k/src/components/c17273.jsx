import React from 'react';
const LABEL_17273 = 'component_17273';
export function Component17273({ value = 17273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17273, 'data-value': derived.doubled }, children);
}
export default Component17273;
