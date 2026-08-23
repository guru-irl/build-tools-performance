import React from 'react';
const LABEL_39332 = 'component_39332';
export function Component39332({ value = 39332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39332, 'data-value': derived.doubled }, children);
}
export default Component39332;
