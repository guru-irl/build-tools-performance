import React from 'react';
const LABEL_37593 = 'component_37593';
export function Component37593({ value = 37593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37593, 'data-value': derived.doubled }, children);
}
export default Component37593;
