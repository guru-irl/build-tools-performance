import React from 'react';
const LABEL_9867 = 'component_9867';
export function Component9867({ value = 9867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9867, 'data-value': derived.doubled }, children);
}
export default Component9867;
