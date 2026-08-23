import React from 'react';
const LABEL_16893 = 'component_16893';
export function Component16893({ value = 16893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16893, 'data-value': derived.doubled }, children);
}
export default Component16893;
