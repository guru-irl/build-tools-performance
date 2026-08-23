import React from 'react';
const LABEL_44631 = 'component_44631';
export function Component44631({ value = 44631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44631, 'data-value': derived.doubled }, children);
}
export default Component44631;
