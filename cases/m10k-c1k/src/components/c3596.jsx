import React from 'react';
const LABEL_3596 = 'component_3596';
export function Component3596({ value = 3596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3596, 'data-value': derived.doubled }, children);
}
export default Component3596;
