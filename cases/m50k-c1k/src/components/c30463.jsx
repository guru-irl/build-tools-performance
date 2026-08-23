import React from 'react';
const LABEL_30463 = 'component_30463';
export function Component30463({ value = 30463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30463, 'data-value': derived.doubled }, children);
}
export default Component30463;
