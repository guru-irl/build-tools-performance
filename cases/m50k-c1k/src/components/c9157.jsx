import React from 'react';
const LABEL_9157 = 'component_9157';
export function Component9157({ value = 9157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9157, 'data-value': derived.doubled }, children);
}
export default Component9157;
