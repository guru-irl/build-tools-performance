import React from 'react';
const LABEL_30662 = 'component_30662';
export function Component30662({ value = 30662, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30662, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30662, 'data-value': derived.doubled }, children);
}
export default Component30662;
