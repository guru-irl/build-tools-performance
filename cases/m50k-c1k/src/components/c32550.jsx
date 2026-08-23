import React from 'react';
const LABEL_32550 = 'component_32550';
export function Component32550({ value = 32550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32550, 'data-value': derived.doubled }, children);
}
export default Component32550;
