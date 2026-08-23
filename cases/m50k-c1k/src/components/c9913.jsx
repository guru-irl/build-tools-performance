import React from 'react';
const LABEL_9913 = 'component_9913';
export function Component9913({ value = 9913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9913, 'data-value': derived.doubled }, children);
}
export default Component9913;
