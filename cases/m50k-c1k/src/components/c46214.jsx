import React from 'react';
const LABEL_46214 = 'component_46214';
export function Component46214({ value = 46214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46214, 'data-value': derived.doubled }, children);
}
export default Component46214;
