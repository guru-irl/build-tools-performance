import React from 'react';
const LABEL_10797 = 'component_10797';
export function Component10797({ value = 10797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10797, 'data-value': derived.doubled }, children);
}
export default Component10797;
