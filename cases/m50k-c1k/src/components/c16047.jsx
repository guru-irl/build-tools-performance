import React from 'react';
const LABEL_16047 = 'component_16047';
export function Component16047({ value = 16047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16047, 'data-value': derived.doubled }, children);
}
export default Component16047;
