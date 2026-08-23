import React from 'react';
const LABEL_10754 = 'component_10754';
export function Component10754({ value = 10754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10754, 'data-value': derived.doubled }, children);
}
export default Component10754;
