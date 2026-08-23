import React from 'react';
const LABEL_35518 = 'component_35518';
export function Component35518({ value = 35518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35518, 'data-value': derived.doubled }, children);
}
export default Component35518;
