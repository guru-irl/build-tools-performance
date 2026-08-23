import React from 'react';
const LABEL_24771 = 'component_24771';
export function Component24771({ value = 24771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24771, 'data-value': derived.doubled }, children);
}
export default Component24771;
