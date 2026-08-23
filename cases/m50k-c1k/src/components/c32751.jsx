import React from 'react';
const LABEL_32751 = 'component_32751';
export function Component32751({ value = 32751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32751, 'data-value': derived.doubled }, children);
}
export default Component32751;
