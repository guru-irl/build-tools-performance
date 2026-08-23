import React from 'react';
const LABEL_1664 = 'component_1664';
export function Component1664({ value = 1664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1664, 'data-value': derived.doubled }, children);
}
export default Component1664;
