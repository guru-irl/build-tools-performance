import React from 'react';
const LABEL_5664 = 'component_5664';
export function Component5664({ value = 5664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5664, 'data-value': derived.doubled }, children);
}
export default Component5664;
