import React from 'react';
const LABEL_9902 = 'component_9902';
export function Component9902({ value = 9902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9902, 'data-value': derived.doubled }, children);
}
export default Component9902;
