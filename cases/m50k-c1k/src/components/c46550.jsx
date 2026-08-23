import React from 'react';
const LABEL_46550 = 'component_46550';
export function Component46550({ value = 46550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46550, 'data-value': derived.doubled }, children);
}
export default Component46550;
