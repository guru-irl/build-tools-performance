import React from 'react';
const LABEL_18178 = 'component_18178';
export function Component18178({ value = 18178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18178, 'data-value': derived.doubled }, children);
}
export default Component18178;
