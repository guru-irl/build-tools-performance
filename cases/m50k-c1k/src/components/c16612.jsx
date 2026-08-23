import React from 'react';
const LABEL_16612 = 'component_16612';
export function Component16612({ value = 16612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16612, 'data-value': derived.doubled }, children);
}
export default Component16612;
