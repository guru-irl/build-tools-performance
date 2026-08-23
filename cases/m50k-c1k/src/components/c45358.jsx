import React from 'react';
const LABEL_45358 = 'component_45358';
export function Component45358({ value = 45358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45358, 'data-value': derived.doubled }, children);
}
export default Component45358;
