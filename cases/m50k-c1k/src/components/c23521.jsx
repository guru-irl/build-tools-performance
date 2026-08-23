import React from 'react';
const LABEL_23521 = 'component_23521';
export function Component23521({ value = 23521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23521, 'data-value': derived.doubled }, children);
}
export default Component23521;
