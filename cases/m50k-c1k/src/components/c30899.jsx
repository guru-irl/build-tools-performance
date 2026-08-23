import React from 'react';
const LABEL_30899 = 'component_30899';
export function Component30899({ value = 30899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30899, 'data-value': derived.doubled }, children);
}
export default Component30899;
