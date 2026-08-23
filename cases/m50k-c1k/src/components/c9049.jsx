import React from 'react';
const LABEL_9049 = 'component_9049';
export function Component9049({ value = 9049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9049, 'data-value': derived.doubled }, children);
}
export default Component9049;
