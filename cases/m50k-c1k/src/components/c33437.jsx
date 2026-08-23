import React from 'react';
const LABEL_33437 = 'component_33437';
export function Component33437({ value = 33437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33437, 'data-value': derived.doubled }, children);
}
export default Component33437;
