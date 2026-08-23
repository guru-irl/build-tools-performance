import React from 'react';
const LABEL_19809 = 'component_19809';
export function Component19809({ value = 19809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19809, 'data-value': derived.doubled }, children);
}
export default Component19809;
