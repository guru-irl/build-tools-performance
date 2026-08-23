import React from 'react';
const LABEL_9347 = 'component_9347';
export function Component9347({ value = 9347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9347, 'data-value': derived.doubled }, children);
}
export default Component9347;
