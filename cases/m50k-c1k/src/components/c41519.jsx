import React from 'react';
const LABEL_41519 = 'component_41519';
export function Component41519({ value = 41519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41519, 'data-value': derived.doubled }, children);
}
export default Component41519;
