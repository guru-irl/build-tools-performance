import React from 'react';
const LABEL_17540 = 'component_17540';
export function Component17540({ value = 17540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17540, 'data-value': derived.doubled }, children);
}
export default Component17540;
