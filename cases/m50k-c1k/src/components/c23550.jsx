import React from 'react';
const LABEL_23550 = 'component_23550';
export function Component23550({ value = 23550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23550, 'data-value': derived.doubled }, children);
}
export default Component23550;
