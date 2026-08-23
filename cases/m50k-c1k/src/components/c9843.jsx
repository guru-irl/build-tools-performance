import React from 'react';
const LABEL_9843 = 'component_9843';
export function Component9843({ value = 9843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9843, 'data-value': derived.doubled }, children);
}
export default Component9843;
