import React from 'react';
const LABEL_30494 = 'component_30494';
export function Component30494({ value = 30494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30494, 'data-value': derived.doubled }, children);
}
export default Component30494;
