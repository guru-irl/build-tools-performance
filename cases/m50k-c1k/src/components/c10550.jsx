import React from 'react';
const LABEL_10550 = 'component_10550';
export function Component10550({ value = 10550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10550, 'data-value': derived.doubled }, children);
}
export default Component10550;
