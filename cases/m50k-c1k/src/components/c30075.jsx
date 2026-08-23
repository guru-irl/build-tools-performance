import React from 'react';
const LABEL_30075 = 'component_30075';
export function Component30075({ value = 30075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30075, 'data-value': derived.doubled }, children);
}
export default Component30075;
