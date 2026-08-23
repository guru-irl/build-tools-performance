import React from 'react';
const LABEL_30655 = 'component_30655';
export function Component30655({ value = 30655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30655, 'data-value': derived.doubled }, children);
}
export default Component30655;
