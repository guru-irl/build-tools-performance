import React from 'react';
const LABEL_9742 = 'component_9742';
export function Component9742({ value = 9742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9742, 'data-value': derived.doubled }, children);
}
export default Component9742;
