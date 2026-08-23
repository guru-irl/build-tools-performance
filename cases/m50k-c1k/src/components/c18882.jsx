import React from 'react';
const LABEL_18882 = 'component_18882';
export function Component18882({ value = 18882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18882, 'data-value': derived.doubled }, children);
}
export default Component18882;
