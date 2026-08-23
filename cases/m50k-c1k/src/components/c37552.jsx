import React from 'react';
const LABEL_37552 = 'component_37552';
export function Component37552({ value = 37552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37552, 'data-value': derived.doubled }, children);
}
export default Component37552;
