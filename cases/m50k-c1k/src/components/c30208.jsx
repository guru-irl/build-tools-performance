import React from 'react';
const LABEL_30208 = 'component_30208';
export function Component30208({ value = 30208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30208, 'data-value': derived.doubled }, children);
}
export default Component30208;
