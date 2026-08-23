import React from 'react';
const LABEL_30753 = 'component_30753';
export function Component30753({ value = 30753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30753, 'data-value': derived.doubled }, children);
}
export default Component30753;
