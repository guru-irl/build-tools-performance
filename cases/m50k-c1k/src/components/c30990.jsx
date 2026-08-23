import React from 'react';
const LABEL_30990 = 'component_30990';
export function Component30990({ value = 30990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30990, 'data-value': derived.doubled }, children);
}
export default Component30990;
