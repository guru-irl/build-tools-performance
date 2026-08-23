import React from 'react';
const LABEL_3631 = 'component_3631';
export function Component3631({ value = 3631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3631, 'data-value': derived.doubled }, children);
}
export default Component3631;
