import React from 'react';
const LABEL_17658 = 'component_17658';
export function Component17658({ value = 17658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17658, 'data-value': derived.doubled }, children);
}
export default Component17658;
