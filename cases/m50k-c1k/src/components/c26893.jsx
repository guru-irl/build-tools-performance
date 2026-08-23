import React from 'react';
const LABEL_26893 = 'component_26893';
export function Component26893({ value = 26893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26893, 'data-value': derived.doubled }, children);
}
export default Component26893;
