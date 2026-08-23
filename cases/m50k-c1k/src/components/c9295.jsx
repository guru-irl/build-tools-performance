import React from 'react';
const LABEL_9295 = 'component_9295';
export function Component9295({ value = 9295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9295, 'data-value': derived.doubled }, children);
}
export default Component9295;
