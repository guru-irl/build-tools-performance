import React from 'react';
const LABEL_26443 = 'component_26443';
export function Component26443({ value = 26443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26443, 'data-value': derived.doubled }, children);
}
export default Component26443;
