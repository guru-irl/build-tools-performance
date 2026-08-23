import React from 'react';
const LABEL_9960 = 'component_9960';
export function Component9960({ value = 9960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9960, 'data-value': derived.doubled }, children);
}
export default Component9960;
