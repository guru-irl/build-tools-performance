import React from 'react';
const LABEL_16475 = 'component_16475';
export function Component16475({ value = 16475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16475, 'data-value': derived.doubled }, children);
}
export default Component16475;
