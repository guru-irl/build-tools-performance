import React from 'react';
const LABEL_25862 = 'component_25862';
export function Component25862({ value = 25862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25862, 'data-value': derived.doubled }, children);
}
export default Component25862;
