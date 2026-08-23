import React from 'react';
const LABEL_33862 = 'component_33862';
export function Component33862({ value = 33862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33862, 'data-value': derived.doubled }, children);
}
export default Component33862;
