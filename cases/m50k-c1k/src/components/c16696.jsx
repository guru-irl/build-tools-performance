import React from 'react';
const LABEL_16696 = 'component_16696';
export function Component16696({ value = 16696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16696, 'data-value': derived.doubled }, children);
}
export default Component16696;
