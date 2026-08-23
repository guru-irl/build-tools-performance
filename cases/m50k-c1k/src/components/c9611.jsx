import React from 'react';
const LABEL_9611 = 'component_9611';
export function Component9611({ value = 9611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9611, 'data-value': derived.doubled }, children);
}
export default Component9611;
