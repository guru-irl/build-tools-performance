import React from 'react';
const LABEL_30977 = 'component_30977';
export function Component30977({ value = 30977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30977, 'data-value': derived.doubled }, children);
}
export default Component30977;
