import React from 'react';
const LABEL_46437 = 'component_46437';
export function Component46437({ value = 46437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46437, 'data-value': derived.doubled }, children);
}
export default Component46437;
