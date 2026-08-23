import React from 'react';
const LABEL_9989 = 'component_9989';
export function Component9989({ value = 9989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9989, 'data-value': derived.doubled }, children);
}
export default Component9989;
