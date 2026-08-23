import React from 'react';
const LABEL_13475 = 'component_13475';
export function Component13475({ value = 13475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13475, 'data-value': derived.doubled }, children);
}
export default Component13475;
