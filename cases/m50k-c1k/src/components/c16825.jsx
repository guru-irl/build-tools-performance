import React from 'react';
const LABEL_16825 = 'component_16825';
export function Component16825({ value = 16825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16825, 'data-value': derived.doubled }, children);
}
export default Component16825;
