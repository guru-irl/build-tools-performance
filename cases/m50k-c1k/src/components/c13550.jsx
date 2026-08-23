import React from 'react';
const LABEL_13550 = 'component_13550';
export function Component13550({ value = 13550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13550, 'data-value': derived.doubled }, children);
}
export default Component13550;
