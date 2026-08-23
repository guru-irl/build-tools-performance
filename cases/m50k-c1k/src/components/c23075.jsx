import React from 'react';
const LABEL_23075 = 'component_23075';
export function Component23075({ value = 23075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23075, 'data-value': derived.doubled }, children);
}
export default Component23075;
