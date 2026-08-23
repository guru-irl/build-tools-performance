import React from 'react';
const LABEL_22194 = 'component_22194';
export function Component22194({ value = 22194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22194, 'data-value': derived.doubled }, children);
}
export default Component22194;
