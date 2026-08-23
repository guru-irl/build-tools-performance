import React from 'react';
const LABEL_17449 = 'component_17449';
export function Component17449({ value = 17449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17449, 'data-value': derived.doubled }, children);
}
export default Component17449;
