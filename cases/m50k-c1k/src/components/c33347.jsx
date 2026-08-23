import React from 'react';
const LABEL_33347 = 'component_33347';
export function Component33347({ value = 33347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33347, 'data-value': derived.doubled }, children);
}
export default Component33347;
