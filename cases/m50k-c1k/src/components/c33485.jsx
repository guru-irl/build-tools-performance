import React from 'react';
const LABEL_33485 = 'component_33485';
export function Component33485({ value = 33485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33485, 'data-value': derived.doubled }, children);
}
export default Component33485;
