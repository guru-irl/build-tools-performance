import React from 'react';
const LABEL_36862 = 'component_36862';
export function Component36862({ value = 36862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36862, 'data-value': derived.doubled }, children);
}
export default Component36862;
