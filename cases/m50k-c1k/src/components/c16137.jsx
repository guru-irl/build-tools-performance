import React from 'react';
const LABEL_16137 = 'component_16137';
export function Component16137({ value = 16137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16137, 'data-value': derived.doubled }, children);
}
export default Component16137;
