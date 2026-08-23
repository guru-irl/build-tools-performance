import React from 'react';
const LABEL_9154 = 'component_9154';
export function Component9154({ value = 9154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9154, 'data-value': derived.doubled }, children);
}
export default Component9154;
