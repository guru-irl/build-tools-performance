import React from 'react';
const LABEL_26178 = 'component_26178';
export function Component26178({ value = 26178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26178, 'data-value': derived.doubled }, children);
}
export default Component26178;
