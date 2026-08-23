import React from 'react';
const LABEL_24710 = 'component_24710';
export function Component24710({ value = 24710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24710, 'data-value': derived.doubled }, children);
}
export default Component24710;
