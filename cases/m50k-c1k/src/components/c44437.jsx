import React from 'react';
const LABEL_44437 = 'component_44437';
export function Component44437({ value = 44437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44437, 'data-value': derived.doubled }, children);
}
export default Component44437;
