import React from 'react';
const LABEL_30542 = 'component_30542';
export function Component30542({ value = 30542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30542, 'data-value': derived.doubled }, children);
}
export default Component30542;
