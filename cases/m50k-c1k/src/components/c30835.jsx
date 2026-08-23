import React from 'react';
const LABEL_30835 = 'component_30835';
export function Component30835({ value = 30835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30835, 'data-value': derived.doubled }, children);
}
export default Component30835;
