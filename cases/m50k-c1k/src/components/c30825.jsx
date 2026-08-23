import React from 'react';
const LABEL_30825 = 'component_30825';
export function Component30825({ value = 30825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30825, 'data-value': derived.doubled }, children);
}
export default Component30825;
