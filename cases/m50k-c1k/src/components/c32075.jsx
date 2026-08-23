import React from 'react';
const LABEL_32075 = 'component_32075';
export function Component32075({ value = 32075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32075, 'data-value': derived.doubled }, children);
}
export default Component32075;
