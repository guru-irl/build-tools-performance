import React from 'react';
const LABEL_24729 = 'component_24729';
export function Component24729({ value = 24729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24729, 'data-value': derived.doubled }, children);
}
export default Component24729;
