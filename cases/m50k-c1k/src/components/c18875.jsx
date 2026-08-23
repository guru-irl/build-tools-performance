import React from 'react';
const LABEL_18875 = 'component_18875';
export function Component18875({ value = 18875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18875, 'data-value': derived.doubled }, children);
}
export default Component18875;
