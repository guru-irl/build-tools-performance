import React from 'react';
const LABEL_13156 = 'component_13156';
export function Component13156({ value = 13156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13156, 'data-value': derived.doubled }, children);
}
export default Component13156;
