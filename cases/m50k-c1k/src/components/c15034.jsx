import React from 'react';
const LABEL_15034 = 'component_15034';
export function Component15034({ value = 15034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15034, 'data-value': derived.doubled }, children);
}
export default Component15034;
