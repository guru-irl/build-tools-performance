import React from 'react';
const LABEL_18817 = 'component_18817';
export function Component18817({ value = 18817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18817, 'data-value': derived.doubled }, children);
}
export default Component18817;
