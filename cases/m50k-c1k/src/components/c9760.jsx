import React from 'react';
const LABEL_9760 = 'component_9760';
export function Component9760({ value = 9760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9760, 'data-value': derived.doubled }, children);
}
export default Component9760;
