import React from 'react';
const LABEL_18249 = 'component_18249';
export function Component18249({ value = 18249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18249, 'data-value': derived.doubled }, children);
}
export default Component18249;
