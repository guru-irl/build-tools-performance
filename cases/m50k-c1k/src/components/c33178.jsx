import React from 'react';
const LABEL_33178 = 'component_33178';
export function Component33178({ value = 33178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33178, 'data-value': derived.doubled }, children);
}
export default Component33178;
