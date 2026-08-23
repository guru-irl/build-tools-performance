import React from 'react';
const LABEL_18437 = 'component_18437';
export function Component18437({ value = 18437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18437, 'data-value': derived.doubled }, children);
}
export default Component18437;
