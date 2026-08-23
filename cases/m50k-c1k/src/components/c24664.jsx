import React from 'react';
const LABEL_24664 = 'component_24664';
export function Component24664({ value = 24664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24664, 'data-value': derived.doubled }, children);
}
export default Component24664;
