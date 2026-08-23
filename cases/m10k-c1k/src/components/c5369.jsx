import React from 'react';
const LABEL_5369 = 'component_5369';
export function Component5369({ value = 5369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5369, 'data-value': derived.doubled }, children);
}
export default Component5369;
