import React from 'react';
const LABEL_30737 = 'component_30737';
export function Component30737({ value = 30737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30737, 'data-value': derived.doubled }, children);
}
export default Component30737;
