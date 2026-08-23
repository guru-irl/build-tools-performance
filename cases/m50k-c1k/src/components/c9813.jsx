import React from 'react';
const LABEL_9813 = 'component_9813';
export function Component9813({ value = 9813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9813, 'data-value': derived.doubled }, children);
}
export default Component9813;
