import React from 'react';
const LABEL_17690 = 'component_17690';
export function Component17690({ value = 17690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17690, 'data-value': derived.doubled }, children);
}
export default Component17690;
