import React from 'react';
const LABEL_30862 = 'component_30862';
export function Component30862({ value = 30862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30862, 'data-value': derived.doubled }, children);
}
export default Component30862;
