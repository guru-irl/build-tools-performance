import React from 'react';
const LABEL_9289 = 'component_9289';
export function Component9289({ value = 9289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9289, 'data-value': derived.doubled }, children);
}
export default Component9289;
