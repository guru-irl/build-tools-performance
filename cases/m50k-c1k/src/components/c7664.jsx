import React from 'react';
const LABEL_7664 = 'component_7664';
export function Component7664({ value = 7664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7664, 'data-value': derived.doubled }, children);
}
export default Component7664;
