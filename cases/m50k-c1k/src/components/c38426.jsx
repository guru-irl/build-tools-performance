import React from 'react';
const LABEL_38426 = 'component_38426';
export function Component38426({ value = 38426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38426, 'data-value': derived.doubled }, children);
}
export default Component38426;
