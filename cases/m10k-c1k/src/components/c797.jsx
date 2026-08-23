import React from 'react';
const LABEL_797 = 'component_797';
export function Component797({ value = 797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_797, 'data-value': derived.doubled }, children);
}
export default Component797;
