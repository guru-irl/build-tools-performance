import React from 'react';
const LABEL_18116 = 'component_18116';
export function Component18116({ value = 18116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18116, 'data-value': derived.doubled }, children);
}
export default Component18116;
