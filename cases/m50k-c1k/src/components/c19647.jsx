import React from 'react';
const LABEL_19647 = 'component_19647';
export function Component19647({ value = 19647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19647, 'data-value': derived.doubled }, children);
}
export default Component19647;
