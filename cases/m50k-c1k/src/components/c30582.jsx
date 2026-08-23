import React from 'react';
const LABEL_30582 = 'component_30582';
export function Component30582({ value = 30582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30582, 'data-value': derived.doubled }, children);
}
export default Component30582;
