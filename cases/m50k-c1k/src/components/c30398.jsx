import React from 'react';
const LABEL_30398 = 'component_30398';
export function Component30398({ value = 30398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30398, 'data-value': derived.doubled }, children);
}
export default Component30398;
