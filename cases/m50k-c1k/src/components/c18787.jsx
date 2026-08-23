import React from 'react';
const LABEL_18787 = 'component_18787';
export function Component18787({ value = 18787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18787, 'data-value': derived.doubled }, children);
}
export default Component18787;
