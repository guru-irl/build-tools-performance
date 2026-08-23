import React from 'react';
const LABEL_23462 = 'component_23462';
export function Component23462({ value = 23462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23462, 'data-value': derived.doubled }, children);
}
export default Component23462;
