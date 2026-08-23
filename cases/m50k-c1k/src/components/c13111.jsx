import React from 'react';
const LABEL_13111 = 'component_13111';
export function Component13111({ value = 13111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13111, 'data-value': derived.doubled }, children);
}
export default Component13111;
