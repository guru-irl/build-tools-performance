import React from 'react';
const LABEL_21664 = 'component_21664';
export function Component21664({ value = 21664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21664, 'data-value': derived.doubled }, children);
}
export default Component21664;
