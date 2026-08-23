import React from 'react';
const LABEL_23917 = 'component_23917';
export function Component23917({ value = 23917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23917, 'data-value': derived.doubled }, children);
}
export default Component23917;
