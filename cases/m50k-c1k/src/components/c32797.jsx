import React from 'react';
const LABEL_32797 = 'component_32797';
export function Component32797({ value = 32797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32797, 'data-value': derived.doubled }, children);
}
export default Component32797;
