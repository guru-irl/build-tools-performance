import React from 'react';
const LABEL_28658 = 'component_28658';
export function Component28658({ value = 28658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28658, 'data-value': derived.doubled }, children);
}
export default Component28658;
