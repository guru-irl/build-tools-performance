import React from 'react';
const LABEL_32090 = 'component_32090';
export function Component32090({ value = 32090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32090, 'data-value': derived.doubled }, children);
}
export default Component32090;
