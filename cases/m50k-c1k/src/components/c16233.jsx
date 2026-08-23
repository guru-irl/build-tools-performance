import React from 'react';
const LABEL_16233 = 'component_16233';
export function Component16233({ value = 16233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16233, 'data-value': derived.doubled }, children);
}
export default Component16233;
