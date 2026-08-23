import React from 'react';
const LABEL_24231 = 'component_24231';
export function Component24231({ value = 24231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24231, 'data-value': derived.doubled }, children);
}
export default Component24231;
