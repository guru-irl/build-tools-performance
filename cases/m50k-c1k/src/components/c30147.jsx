import React from 'react';
const LABEL_30147 = 'component_30147';
export function Component30147({ value = 30147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30147, 'data-value': derived.doubled }, children);
}
export default Component30147;
