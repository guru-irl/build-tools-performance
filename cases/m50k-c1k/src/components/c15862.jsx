import React from 'react';
const LABEL_15862 = 'component_15862';
export function Component15862({ value = 15862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15862, 'data-value': derived.doubled }, children);
}
export default Component15862;
