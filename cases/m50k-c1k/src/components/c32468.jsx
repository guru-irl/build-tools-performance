import React from 'react';
const LABEL_32468 = 'component_32468';
export function Component32468({ value = 32468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32468, 'data-value': derived.doubled }, children);
}
export default Component32468;
