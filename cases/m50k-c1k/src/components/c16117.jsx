import React from 'react';
const LABEL_16117 = 'component_16117';
export function Component16117({ value = 16117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16117, 'data-value': derived.doubled }, children);
}
export default Component16117;
