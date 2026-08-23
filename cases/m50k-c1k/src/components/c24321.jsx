import React from 'react';
const LABEL_24321 = 'component_24321';
export function Component24321({ value = 24321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24321, 'data-value': derived.doubled }, children);
}
export default Component24321;
