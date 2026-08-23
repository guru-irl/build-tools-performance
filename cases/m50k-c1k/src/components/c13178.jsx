import React from 'react';
const LABEL_13178 = 'component_13178';
export function Component13178({ value = 13178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13178, 'data-value': derived.doubled }, children);
}
export default Component13178;
