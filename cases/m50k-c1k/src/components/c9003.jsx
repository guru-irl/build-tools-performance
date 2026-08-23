import React from 'react';
const LABEL_9003 = 'component_9003';
export function Component9003({ value = 9003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9003, 'data-value': derived.doubled }, children);
}
export default Component9003;
