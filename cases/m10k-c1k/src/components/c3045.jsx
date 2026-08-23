import React from 'react';
const LABEL_3045 = 'component_3045';
export function Component3045({ value = 3045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3045, 'data-value': derived.doubled }, children);
}
export default Component3045;
