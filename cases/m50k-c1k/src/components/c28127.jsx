import React from 'react';
const LABEL_28127 = 'component_28127';
export function Component28127({ value = 28127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28127, 'data-value': derived.doubled }, children);
}
export default Component28127;
