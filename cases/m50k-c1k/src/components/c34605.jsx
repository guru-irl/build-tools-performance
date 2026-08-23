import React from 'react';
const LABEL_34605 = 'component_34605';
export function Component34605({ value = 34605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34605, 'data-value': derived.doubled }, children);
}
export default Component34605;
