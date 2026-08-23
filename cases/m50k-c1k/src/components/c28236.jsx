import React from 'react';
const LABEL_28236 = 'component_28236';
export function Component28236({ value = 28236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28236, 'data-value': derived.doubled }, children);
}
export default Component28236;
