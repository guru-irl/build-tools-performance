import React from 'react';
const LABEL_17960 = 'component_17960';
export function Component17960({ value = 17960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17960, 'data-value': derived.doubled }, children);
}
export default Component17960;
