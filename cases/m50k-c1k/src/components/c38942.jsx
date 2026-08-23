import React from 'react';
const LABEL_38942 = 'component_38942';
export function Component38942({ value = 38942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38942, 'data-value': derived.doubled }, children);
}
export default Component38942;
