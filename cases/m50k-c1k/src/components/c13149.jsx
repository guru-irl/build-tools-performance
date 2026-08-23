import React from 'react';
const LABEL_13149 = 'component_13149';
export function Component13149({ value = 13149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13149, 'data-value': derived.doubled }, children);
}
export default Component13149;
