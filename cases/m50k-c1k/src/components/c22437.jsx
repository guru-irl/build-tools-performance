import React from 'react';
const LABEL_22437 = 'component_22437';
export function Component22437({ value = 22437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22437, 'data-value': derived.doubled }, children);
}
export default Component22437;
