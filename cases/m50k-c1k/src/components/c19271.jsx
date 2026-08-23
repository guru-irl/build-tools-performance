import React from 'react';
const LABEL_19271 = 'component_19271';
export function Component19271({ value = 19271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19271, 'data-value': derived.doubled }, children);
}
export default Component19271;
