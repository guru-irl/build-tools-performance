import React from 'react';
const LABEL_28504 = 'component_28504';
export function Component28504({ value = 28504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28504, 'data-value': derived.doubled }, children);
}
export default Component28504;
