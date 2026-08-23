import React from 'react';
const LABEL_13664 = 'component_13664';
export function Component13664({ value = 13664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13664, 'data-value': derived.doubled }, children);
}
export default Component13664;
