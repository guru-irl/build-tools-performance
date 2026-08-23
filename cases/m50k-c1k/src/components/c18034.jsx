import React from 'react';
const LABEL_18034 = 'component_18034';
export function Component18034({ value = 18034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18034, 'data-value': derived.doubled }, children);
}
export default Component18034;
