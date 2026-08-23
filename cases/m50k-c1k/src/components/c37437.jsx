import React from 'react';
const LABEL_37437 = 'component_37437';
export function Component37437({ value = 37437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37437, 'data-value': derived.doubled }, children);
}
export default Component37437;
