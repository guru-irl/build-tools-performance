import React from 'react';
const LABEL_6550 = 'component_6550';
export function Component6550({ value = 6550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6550, 'data-value': derived.doubled }, children);
}
export default Component6550;
