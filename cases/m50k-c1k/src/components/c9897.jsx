import React from 'react';
const LABEL_9897 = 'component_9897';
export function Component9897({ value = 9897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9897, 'data-value': derived.doubled }, children);
}
export default Component9897;
