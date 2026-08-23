import React from 'react';
const LABEL_9153 = 'component_9153';
export function Component9153({ value = 9153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9153, 'data-value': derived.doubled }, children);
}
export default Component9153;
