import React from 'react';
const LABEL_26236 = 'component_26236';
export function Component26236({ value = 26236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26236, 'data-value': derived.doubled }, children);
}
export default Component26236;
