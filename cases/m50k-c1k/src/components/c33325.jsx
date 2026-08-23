import React from 'react';
const LABEL_33325 = 'component_33325';
export function Component33325({ value = 33325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33325, 'data-value': derived.doubled }, children);
}
export default Component33325;
