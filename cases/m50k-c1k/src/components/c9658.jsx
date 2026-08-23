import React from 'react';
const LABEL_9658 = 'component_9658';
export function Component9658({ value = 9658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9658, 'data-value': derived.doubled }, children);
}
export default Component9658;
