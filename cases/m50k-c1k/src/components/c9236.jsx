import React from 'react';
const LABEL_9236 = 'component_9236';
export function Component9236({ value = 9236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9236, 'data-value': derived.doubled }, children);
}
export default Component9236;
