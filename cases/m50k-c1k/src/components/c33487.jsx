import React from 'react';
const LABEL_33487 = 'component_33487';
export function Component33487({ value = 33487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33487, 'data-value': derived.doubled }, children);
}
export default Component33487;
