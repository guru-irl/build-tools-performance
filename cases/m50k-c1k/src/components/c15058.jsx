import React from 'react';
const LABEL_15058 = 'component_15058';
export function Component15058({ value = 15058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15058, 'data-value': derived.doubled }, children);
}
export default Component15058;
