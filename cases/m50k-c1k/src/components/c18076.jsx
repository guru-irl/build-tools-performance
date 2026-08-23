import React from 'react';
const LABEL_18076 = 'component_18076';
export function Component18076({ value = 18076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18076, 'data-value': derived.doubled }, children);
}
export default Component18076;
