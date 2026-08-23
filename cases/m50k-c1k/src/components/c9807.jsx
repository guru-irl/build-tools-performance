import React from 'react';
const LABEL_9807 = 'component_9807';
export function Component9807({ value = 9807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9807, 'data-value': derived.doubled }, children);
}
export default Component9807;
