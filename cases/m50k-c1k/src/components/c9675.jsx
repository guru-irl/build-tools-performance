import React from 'react';
const LABEL_9675 = 'component_9675';
export function Component9675({ value = 9675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9675, 'data-value': derived.doubled }, children);
}
export default Component9675;
