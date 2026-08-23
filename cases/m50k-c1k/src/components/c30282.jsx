import React from 'react';
const LABEL_30282 = 'component_30282';
export function Component30282({ value = 30282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30282, 'data-value': derived.doubled }, children);
}
export default Component30282;
