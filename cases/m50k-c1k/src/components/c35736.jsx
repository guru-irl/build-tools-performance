import React from 'react';
const LABEL_35736 = 'component_35736';
export function Component35736({ value = 35736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35736, 'data-value': derived.doubled }, children);
}
export default Component35736;
