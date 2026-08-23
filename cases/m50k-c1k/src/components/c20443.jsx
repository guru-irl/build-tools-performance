import React from 'react';
const LABEL_20443 = 'component_20443';
export function Component20443({ value = 20443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20443, 'data-value': derived.doubled }, children);
}
export default Component20443;
