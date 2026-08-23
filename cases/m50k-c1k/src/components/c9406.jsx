import React from 'react';
const LABEL_9406 = 'component_9406';
export function Component9406({ value = 9406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9406, 'data-value': derived.doubled }, children);
}
export default Component9406;
