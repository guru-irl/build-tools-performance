import React from 'react';
const LABEL_30636 = 'component_30636';
export function Component30636({ value = 30636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30636, 'data-value': derived.doubled }, children);
}
export default Component30636;
