import React from 'react';
const LABEL_3368 = 'component_3368';
export function Component3368({ value = 3368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3368, 'data-value': derived.doubled }, children);
}
export default Component3368;
