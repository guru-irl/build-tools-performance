import React from 'react';
const LABEL_31273 = 'component_31273';
export function Component31273({ value = 31273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31273, 'data-value': derived.doubled }, children);
}
export default Component31273;
