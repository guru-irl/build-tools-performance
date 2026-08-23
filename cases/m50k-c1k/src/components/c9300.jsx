import React from 'react';
const LABEL_9300 = 'component_9300';
export function Component9300({ value = 9300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9300, 'data-value': derived.doubled }, children);
}
export default Component9300;
